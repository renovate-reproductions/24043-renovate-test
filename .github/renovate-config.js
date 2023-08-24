module.exports = {
	branchPrefix: 'renovate-sh/',
	gitAuthor: 'Renovate Bot (self-hosted) <bot@renovateapp.com>',
	username: 'github-actions[bot]',
	repositories: [ 'renovate-reproductions/24043-renovate-test' ],

	// We're including configuration in this file.
	onboarding: false,
	requireConfig: false,

	// This is the renovate configuration.
	extends: [ 'config:recommended' ],
	timezone: 'UTC',
	customEnvVariables: {
		CONTAINERBASE_LOG_LEVEL: 'debug',
		HOSTNAME: 'something',
	},
};
