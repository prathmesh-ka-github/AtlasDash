# Developer Docs

This document serves as a best practices guide for developers contributing to this repository. Following these conventions is essential to maintaining code quality, consistency, and ensuring a smoother, more collaborative development process across the team.

<br>

## Branches

This repository will maintain two main branches. 

1. Staging - Live working branch.
1. Develop - Testing branch.

Both will be deployed. While working on a feature branch, merge it into Develop for testing. After the test pass successfully then a pull request must be issued for merging into Staging branch.

### Naming -
Branch name will follow a combination of Snake case and Pascal case naming convention. Which means capitalize first letters + use underscores.(Example - Example_Branch_Name)

**Examples -**

1. Login_Auth
1. Instructions_Page
1. Clock_Timeout
1. Classroom_Invite_API

Be expressive while naming your branches.

<br>


## Commits

### Format

We use the `emojiKarma` format for commit messages

`{emoji} {action}({appArea}) {commit message}`

**eg.**

```
:sparkles: feat(comp) add SideBar component
```

## Prefixes (Icon + Action):

- New feature: **:sparkles: feat()** `:sparkles:` NOT :sparkle: `:sparkle:`
- Bug fix: **:bug: bugfix()** `:bug:`
- Minor bug fix: **:adhesive_bandage: fix()** `:adhesive_bandage:`
- Updates from static site: **:spider_web: update()** `:spider_web:`
- Breaking changes: **:boom: breaking()** `:boom:`
- WIP: **:construction: wip()** `:construction:`
- Refactor: **:recycle: refactor()** `:recycle:` or **:hammer:** rewrite() `:hammer:`
- Removing code/files **:fire: remove()** `:fire:`
- Testing: **:white_check_mark: test()** `:white_check_mark:`
- Analytics/tracking code: **:chart_with_upwards_trend: analytics()** `:chart_with_upwards_trend:`
- Styling: **:gem: style()** `:gem:`
- Documentation: **:books: docs()** `:books:`
- Fix CI/Build: **:green_heart: deploy()** `:green_heart:`
- Deprecation **:coffin: deprecate()** `:coffin:`
- Performance: **:rocket: perf()** `:rocket:`

## App Area:

- pages - Page Components
- comp - Components
- layout - Layout
- styles - Styling
- img - Images
- deps - Dependencies
- docs - Documentation
- config - Configuration
- test - Testing
- api - API
- data - Data-specific
- deploy - Deployments
- db - Database
- api - Application programming interface
- assets - Media Assets/Resources

## Inspired by

https://gist.github.com/parmentf/035de27d6ed1dce0b36a

[dannyfritz/commit-message-emoji](https://github.com/dannyfritz/commit-message-emoji)

https://gist.github.com/rxaviers/7360908

See also [gitmoji](https://gitmoji.carloscuesta.me/).

| Commit type                | Emoji                                                     |
| :------------------------- | :-------------------------------------------------------- |
| Initial commit             | :tada: `:tada:`                                           |
| Version tag                | :bookmark: `:bookmark:`                                   |
| New feature                | :sparkles: `:sparkles:`                                   |
| Bugfix                     | :bug: `:bug:`                                             |
| Metadata                   | :card_index: `:card_index:`                               |
| Documentation              | :books: `:books:`                                         |
| Documenting source code    | :bulb: `:bulb:`                                           |
| Performance                | :racehorse: `:racehorse:`                                 |
| Cosmetic                   | :lipstick: `:lipstick:`                                   |
| Tests                      | :rotating_light: `:rotating_light:`                       |
| Adding a test              | :white_check_mark: `:white_check_mark:`                   |
| Make a test pass           | :heavy_check_mark: `:heavy_check_mark:`                   |
| General update             | :zap: `:zap:`                                             |
| Improve format/structure   | :art: `:art:`                                             |
| Refactor code              | :hammer: `:hammer:`                                       |
| Removing code/files        | :fire: `:fire:`                                           |
| Continuous Integration     | :green_heart: `:green_heart:`                             |
| Security                   | :lock: `:lock:`                                           |
| Upgrading dependencies     | :arrow_up: `:arrow_up:`                                   |
| Downgrading dependencies   | :arrow_down: `:arrow_down:`                               |
| Lint                       | :shirt: `:shirt:`                                         |
| Translation                | :alien: `:alien:`                                         |
| Text                       | :pencil: `:pencil:`                                       |
| Critical hotfix            | :ambulance: `:ambulance:`                                 |
| Deploying stuff            | :rocket: `:rocket:`                                       |
| Fixing on MacOS            | :apple: `:apple:`                                         |
| Fixing on Linux            | :penguin: `:penguin:`                                     |
| Fixing on Windows          | :checkered_flag: `:checkered_flag:`                       |
| Work in progress           | :construction: `:construction:`                           |
| Adding CI build system     | :construction_worker: `:construction_worker:`             |
| Analytics or tracking code | :chart_with_upwards_trend: `:chart_with_upwards_trend:`   |
| Removing a dependency      | :heavy_minus_sign: `:heavy_minus_sign:`                   |
| Adding a dependency        | :heavy_plus_sign: `:heavy_plus_sign:`                     |
| Docker                     | :whale: `:whale:`                                         |
| Configuration files        | :wrench: `:wrench:`                                       |
| Package.json in JS         | :package: `:package:`                                     |
| Merging branches           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | :hankey: `:hankey:`                                       |
| Reverting changes          | :rewind: `:rewind:`                                       |
| Breaking changes           | :boom: `:boom:`                                           |
| Code review changes        | :ok_hand: `:ok_hand:`                                     |
| Accessibility              | :wheelchair: `:wheelchair:`                               |
| Move/rename repository     | :truck: `:truck:`                                         |
| Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)          |