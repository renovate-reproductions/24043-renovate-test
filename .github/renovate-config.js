module.exports = {
	branchPrefix: 'renovate-sh/',
	gitAuthor: 'Renovate Bot (self-hosted) <bot@renovateapp.com>',
	platform: 'github',
	repositories: [ 'anomiex/renovate-test' ],

	// We're including configuration in this file.
	onboarding: false,
	requireConfig: false,

	// This is the renovate configuration.
	extends: [ 'config:base' ],
	timezone: 'UTC',
	dependencyDashboard: true,
	packageRules: [
		{
			extends: [ 'monorepo:wordpress' ],
			separateMajorMinor: false,
		},
	],
};
