const { db } = require('../../db/index')
const knexnest = require('knexnest');

const profilesController = (req, res) => {
  db
    .select('*')
    .from('accounts_profile AS profile')
    .leftJoin('accounts_profile_topics AS profile_topics', 'profile.id', 'profile_topics.profile_id')
    .leftJoin('core_topic AS topic', 'topic.id', 'profile_topics.topic_id')
    .leftJoin('core_location AS location', 'location.id', 'profile.location_id')
    .then(profiles => {
      for (let profile of profiles) {
        profile.topics = []
        profile.subscription_groups = []
        profile.featured_talks = []
        profile.user = profile.user_id
        profile.location = profile.location_id
        profile.id = profile.profile_id
        profile.display_name = `${profile.first_name} ${profile.last_name}`

        if (profile.topic_id && profile.topic) {
          profile.topics.push({ topic: profile.topic, id: profile.topic_id })
        }

        delete profile.topic_id
        delete profile.topic
        delete profile.location_id
        delete profile.profile_id
        delete profile.user_id
      }
      return res.json(profiles)
    })
    .catch(err => res.json(err))
};

module.exports = {
  profilesController
}
