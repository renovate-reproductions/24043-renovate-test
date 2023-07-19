module.exports = {
	branchPrefix: 'renovate-sh/',
	gitAuthor: 'Renovate Bot (self-hosted) <bot@renovateapp.com>',
	platform: 'github',
	repositories: [ 'anomiex/renovate-test' ],

	// We're including configuration in this file.
	onboarding: false,
	requireConfig: false,

	// Post-upgrade command
	allowedPostUpgradeCommands: [ '.github/files/renovate-post-upgrade-run.sh' ],
	postUpgradeTasks: {
		commands: [ '.github/files/renovate-post-upgrade-run.sh {{{branchName}}}' ],
                fileFilters: [ '**/*' ],
		executionMode: 'branch',
	},

	// This is the renovate configuration.
	extends: [ 'config:recommended' ],
	timezone: 'UTC',
};
