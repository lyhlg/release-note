/**
* @type {import('semantic-release').GlobalConfig}
*/
module.exports = {
  // plugins: [
  //   "@semantic-release/commit-analyzer",
	//   [
	// 	  "@semantic-release/release-notes-generator",
	// 	  {
	// 		  "preset": "conventionalcommits",
	// 		  "presetConfig": {
	// 			  "types": [
	// 				  { "type": "feat", "section": "✨ Features", "hidden": false },
	// 				  { "type": "fix", "section": "🐛 Bug Fixes", "hidden": false },
	// 				  { "type": "perf", "section": "🌈 Performance", "hidden": false },
	// 				  { "type": "refactor", "section": "♻️ Refactor", "hidden": false },
	// 				  { "type": "docs", "section": "📝 Docs", "hidden": false },
	// 				  { "type": "style", "section": "💄 Styles", "hidden": false },
	// 				  { "type": "revert", "section": "🕐 Reverts", "hidden": false },
	// 				  { "type": "ci", "section": "💫 CI/CD", "hidden": false },
	//
	// 				  { "type": "test", "section": "✅ Tests", "hidden": true },
	// 				  { "type": "chore", "section": "📦 Chores", "hidden": true },
	// 				  { "type": "move", "section": "🚚 Move Files", "hidden": true },
	// 				  { "type": "remove", "section": "🔥 Remove Files", "hidden": true }
	// 			  ]
	// 		  }
	// 	  }
	//   ],
  //   {
  //     // 폴더 foo에 대한 릴리즈 노트를 생성하기 위해 독립된 커밋 히스토리를 생성합니다.
  //     path: '@semantic-release/changelog',
  //     changelogFile: 'foo/CHANGELOG.md',
  //     changelogTitle: '# Changelog for Foo',
  //     changelogSections: [
  //       { type: 'feat', section: 'Features' },
  //       { type: 'fix', section: 'Bug Fixes' },
  //       { type: 'chore', hidden: true },
  //       { type: 'docs', hidden: true },
  //       { type: 'style', hidden: true },
  //       { type: 'refactor', hidden: true },
  //       { type: 'perf', hidden: true },
  //       { type: 'test', hidden: true },
  //     ],
  //   },
  //   // 폴더 bar에 대한 릴리즈 노트 생성
  //   {
  //     // 폴더 bar에 대한 릴리즈 노트를 생성하기 위해 독립된 커밋 히스토리를 생성합니다.
  //     path: '@semantic-release/changelog',
  //     changelogFile: 'bar/CHANGELOG.md',
  //     changelogTitle: '# Changelog for Bar',
  //     changelogSections: [
  //       { type: 'feat', section: 'Features' },
  //       { type: 'fix', section: 'Bug Fixes' },
  //       { type: 'chore', hidden: true },
  //       { type: 'docs', hidden: true },
  //       { type: 'style', hidden: true },
  //       { type: 'refactor', hidden: true },
  //       { type: 'perf', hidden: true },
  //       { type: 'test', hidden: true },
  //     ],
  //   },
  //   "@semantic-release/npm",
  //   "@semantic-release/github",
  // ],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/npm",
			{
				"npmPublish": false
			}
		],
		[
			"@semantic-release/git",
			{
				"assets": ["package.json"],
				"message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
			}
		]
	],
  branches: ["main"],
};