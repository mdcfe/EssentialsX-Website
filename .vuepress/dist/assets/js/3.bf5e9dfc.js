(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{55:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"essentialsx-wiki"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#essentialsx-wiki","aria-hidden":"true"}},[e._v("#")]),e._v(" EssentialsX wiki!")]),a("p",[e._v("EssentialsX is a fork of "),a("a",{attrs:{href:"https://github.com/essentials/Essentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Essentials")]),e._v(". Most commands and permissions work the same way. Old Essentials files are compatible with EssentialsX and are optimized further than the original.")]),a("p",[e._v("Updated permission list: https://essinfo.xeya.me/permissions.php")]),a("p",[e._v("Updated command list: https://essinfo.xeya.me/commands.php")]),a("p",[e._v("For original permissions: http://wiki.mc-ess.net/wiki/Command_Reference/Perm")]),a("p",[e._v("For original commands: http://wiki.mc-ess.net/wiki/Command_Reference")]),a("p",[a("strong",[e._v("Note:")]),e._v(" You need to update "),a("em",[e._v("all")]),e._v(" Essentials modules to the same version of EssentialsX to prevent version mismatch errors. You can find the latest version at the "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX/lastSuccessfulBuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("build server")]),e._v(". In addition, you may want to update your config file - the latest config file can always be found "),a("a",{attrs:{href:"https://github.com/EssentialsX/Essentials/blob/2.x/Essentials/src/config.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),a("h2",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages","aria-hidden":"true"}},[e._v("#")]),e._v(" Pages")]),a("ul",[a("li",[e._v("[[Banner Metadata|BannerMeta]]")]),a("li",[e._v("[[Command Cooldowns]]")])]),a("h2",{attrs:{id:"improvements-over-essentials-and-spigot-essentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improvements-over-essentials-and-spigot-essentials","aria-hidden":"true"}},[e._v("#")]),e._v(" Improvements over Essentials and Spigot Essentials")]),a("ul",[a("li",[e._v("Actively maintained and updated for the latest Spigot and Minecraft versions at all times, retaining support going back to 1.8.")]),a("li",[e._v("Support for updated enchantments, mobs, items and tree types.")]),a("li",[e._v("Has buy/trade sign support for Minecraft 1.9.")]),a("li",[e._v("Support for [[Banner Metadata|BannerMeta]] and [[Command Cooldowns]].")]),a("li",[e._v("Configuration option to not send "),a("code",[e._v("no new mail")]),e._v(" notification on join.")]),a("li",[e._v("Allow commands in kits and use "),a("code",[e._v("{player}")]),e._v(" to replace with player's name.")]),a("li",[e._v("Fixed mob spawner support. This means you can use spawner signs and commands such as "),a("code",[e._v("/i mob_spawner:51")]),e._v(", and the spawners won't be pigs when placed.")]),a("li",[e._v("Fixes giving spawner eggs with entity ID values and potions with damage values in 1.9.")]),a("li",[e._v("Fixes sending and receiving money with EssentialsEco.")]),a("li",[e._v("Uses UUID-backed Vault for permissions group and prefix/suffix lookups. This results in better performance due to not needing a name-to-UUID conversion. Spigot-Essentials implements UUID lookups for zPermissions, but not other permissions plugins. Because EssentialsX prioritizes Vault, all queries using the Vault handler should be much faster.")]),a("li",[a("code",[e._v("/tppos")]),e._v(" can now optionally accept a world name.")]),a("li",[e._v("The "),a("code",[e._v("/msgtoggle")]),e._v(" command allows people to ignore all private messages with permission: "),a("code",[e._v("essentials.msgtoggle")])]),a("li",[e._v("Separate permissions for bulk sell and hand sell\n"),a("ul",[a("li",[a("code",[e._v("essentials.sell.hand")])]),a("li",[a("code",[e._v("essentials.sell.bulk")])])])]),a("li",[e._v("Adds a permission for exemption from SocialSpy: "),a("code",[e._v("essentials.chat.spy.exempt")])]),a("li",[e._v("Adds configuration option for the milk bucket \"easter egg\", which (really shouldn't, but does) allow players to mess with other people's horses: "),a("code",[e._v("milk-bucket-easter-egg")])]),a("li",[e._v('Adds configuration option for the "Set fly mode enabled..." message on join: '),a("code",[e._v("send-fly-enable-on-join")])])]),a("h3",{attrs:{id:"per-gamemode-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#per-gamemode-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Per-gamemode permissions")]),a("p",[e._v("Permissions have been added for each gamemode with the EssentialsX "),a("code",[e._v("/gamemode")]),e._v(" command, meaning that if desired, players may run "),a("code",[e._v("/gma")]),e._v(" and "),a("code",[e._v("/gms")]),e._v(", but not "),a("code",[e._v("/gmc")]),e._v(" or "),a("code",[e._v("/gmsp")]),e._v(". You need to give the player "),a("code",[e._v("essentials.gamemode")]),e._v(" to use the /gm command, then whichever gamemodes you want them to be able to change to:")]),a("ul",[a("li",[a("code",[e._v("essentials.gamemode.creative")])]),a("li",[a("code",[e._v("essentials.gamemode.survival")])]),a("li",[a("code",[e._v("essentials.gamemode.adventure")])]),a("li",[a("code",[e._v("essentials.gamemode.spectator")])]),a("li",[a("code",[e._v("essentials.gamemode.all")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": "),a("code",[e._v("essentials.gamemode")]),e._v(" is still required to execute the /gamemode (and its aliases) command.")]),a("h3",{attrs:{id:"kits-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kits-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Kits changes")]),a("p",[e._v("Kits have been moved from the main config to "),a("code",[e._v("kits.yml")]),e._v(". This means that kits can be created from in-game and automatically added to your server without needing to manually edit the config, while also retaining all the comments in "),a("code",[e._v("config.yml")]),e._v(".")]),a("p",[e._v("In addition, commands are now supported in kits - simply add a line to your kit as follows:")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[e._v("kits")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[e._v("mykit")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[e._v("delay")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token number"}},[e._v("1000")]),e._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[e._v("items")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" 272 1\n      "),a("span",{attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /give "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("player"),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" apple 1\n")])]),a("p",[e._v("You can also include "),a("code",[e._v("{player}")]),e._v(", which will be substituted for the player's name.")]),a("h4",{attrs:{id:"showkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showkit","aria-hidden":"true"}},[e._v("#")]),a("code",[e._v("/showkit")])]),a("p",[e._v("Command: "),a("code",[e._v("/showkit <kitname>")]),a("br"),e._v("\nPermission: "),a("code",[e._v("essentials.showkit")]),a("br"),e._v("\nShows a list of kit contents straight from config file."),a("br"),a("img",{attrs:{src:"https://i.imgur.com/d4Ff8vN.png",alt:"showkit"}})]),a("h4",{attrs:{id:"createkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createkit","aria-hidden":"true"}},[e._v("#")]),a("code",[e._v("/createkit")])]),a("p",[e._v("Command: "),a("code",[e._v("/createkit <kitname> <delay>")]),a("br"),e._v("\nPermission: "),a("code",[e._v("essentials.createkit")]),a("br"),e._v("\nIf "),a("code",[e._v("pastebin-createkit")]),e._v(" is set to false, creates a kit from your inventory and puts it in the "),a("code",[e._v("kits.yml")]),e._v(" file."),a("br"),e._v("\nIf "),a("code",[e._v("pastebin-createkit")]),e._v(" is set to true, creates a kit based on your inventory and returns a link to the file to add to your "),a("code",[e._v("kits.yml")]),e._v("."),a("br"),a("img",{attrs:{src:"https://i.imgur.com/nXMlNGP.png",alt:"createkit"}})]),a("h3",{attrs:{id:"forcefully-disable-teleportation-safety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forcefully-disable-teleportation-safety","aria-hidden":"true"}},[e._v("#")]),e._v(" Forcefully disable teleportation safety")]),a("p",[e._v("Upstream Essentials only has two values for the "),a("code",[e._v("teleport-safety")]),e._v(" option:")]),a("ul",[a("li",[e._v("Convert locations to safe teleports (results in plenty of exploits); or")]),a("li",[e._v("Deny the teleport entirely.")])]),a("p",[e._v("EssentialsX adds a "),a("code",[e._v("force-disable-teleport-safety")]),e._v(" option (defaulting to false), that when combined with "),a("code",[e._v("teleport-safety: true")]),e._v(", disables conversion to safe locations and teleports the user to their exact location.")]),a("p",[a("strong",[e._v("Note:")]),e._v(" To disable cross-world teleportation safety, switch to PaperSpigot and set "),a("code",[e._v("disable-teleportation-suffocation-check")]),e._v(" to true in paper.yml.")]),a("h3",{attrs:{id:"spawner-placement-fix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spawner-placement-fix","aria-hidden":"true"}},[e._v("#")]),e._v(" Spawner placement fix")]),a("p",[e._v("If your placed spawners are still pig spawners, assign "),a("code",[e._v("essentials.spawnerconvert.*")]),e._v(" to your default group.")]),a("h3",{attrs:{id:"controlled-private-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controlled-private-messaging","aria-hidden":"true"}},[e._v("#")]),e._v(" Controlled Private Messaging")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 210")]),e._v(".")])]),a("p",[e._v("There is a configurable feature you may set called "),a("code",[e._v("last-message-reply-recipient")]),e._v(". If set to "),a("code",[e._v("true")]),e._v(", your reply recipient will be "),a("strong",[e._v("whoever you messaged")]),e._v(" last and "),a("em",[e._v("not")]),a("strong",[e._v("whoever messaged you")]),e._v(" last, unless you don't have a reply recipient, in which case whoever messaged you last will be your reply recipient.")]),a("p",[e._v("Here's a formatted scenario of the new last-message-reply-recipient feature:")]),a("blockquote",[a("p",[a("strong",[e._v("SupaHam: /msg Kakifrucht Hi")])])]),a("blockquote",[a("p",[a("em",[e._v("SupaHam -> Kakifrucht: Hi")])])]),a("blockquote",[a("p",[a("strong",[e._v("Kakifrucht: /r Hi")])])]),a("blockquote",[a("p",[a("em",[e._v("Kakifrucht -> SupaHam: Hi")])])]),a("blockquote",[a("p",[a("strong",[e._v("EvilOlaf: /msg Kakifrucht Hi")])])]),a("blockquote",[a("p",[a("em",[e._v("EvilOlaf -> Kakifrucht: Hi")])])]),a("blockquote",[a("p",[a("strong",[e._v("Kakifrucht: /r Hi back to you, SupaHam!")])])]),a("blockquote",[a("p",[a("em",[e._v("Kakifrucht -> SupaHam: Hi back to you, SupaHam!")])])]),a("p",[e._v("If this feature is enabled, EssentialsX will take into account the "),a("code",[e._v("last-message-reply-recipient-timeout")]),e._v(" setting. This setting allows you to configure the duration, in seconds, that the reply-recipient will not change, when receiving replies. If after this duration the recipient receives a message, the recipient's replies will start going to the latest message sender.")]),a("h3",{attrs:{id:"seen-by-uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seen-by-uuid","aria-hidden":"true"}},[e._v("#")]),a("code",[e._v("/seen")]),e._v(" by UUID")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 241")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/2e903ac",target:"_blank",rel:"noopener noreferrer"}},[e._v("2e903ac")]),e._v(").")])]),a("p",[e._v("Typing "),a("code",[e._v("/seen SupaHam")]),e._v(" and "),a("code",[e._v("/seen 5552e21d-de79-40bc-89da-62ee63244fb2")]),e._v(" are now both valid methods of checking when a player was last seen.")]),a("h3",{attrs:{id:"per-world-time-setting-permission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#per-world-time-setting-permission","aria-hidden":"true"}},[e._v("#")]),e._v(" Per-world "),a("code",[e._v("/time")]),e._v(" setting permission")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 250")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/eb924b9",target:"_blank",rel:"noopener noreferrer"}},[e._v("eb924b9")]),e._v(").")])]),a("p",[a("strong",[e._v("Note")]),e._v(": As of "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 262")]),e._v(" (c6d2746), this feature can now be enabled by setting the "),a("code",[e._v("world-time-permissions")]),e._v(" config property to "),a("code",[e._v("true")]),e._v(". "),a("code",[e._v("world-time-permissions")]),e._v(" is set to false by default.")]),a("p",[e._v("Prior to this build, players with the permissions "),a("code",[e._v("essentials.time")]),e._v(" and "),a("code",[e._v("essentials.time.set")]),e._v(" were able to set the time in any world, despite world-permissions provided via permission plugins. This build provides the feature of per world permissions for setting the time of a world.")]),a("h4",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Permissions")]),a("table",[a("thead",[a("tr",[a("th",[e._v("Permission")]),a("th",[e._v("Description")])])]),a("tbody",[a("tr",[a("td",[e._v("essentials.time.world."),a("code",[e._v("<world>")])]),a("td",[e._v("Permits the user to set the time in "),a("code",[e._v("<world>")]),e._v(". "),a("code",[e._v("<world>")]),e._v(" is the world name with spaces replaced with _. e.g. My World becomes, my_world.")])]),a("tr",[a("td",[e._v("essentials.time.world.all")]),a("td",[e._v("Permits the user to set time of all worlds. This will override "),a("code",[e._v("essentials.time.world.<world>")]),e._v(".")])])])]),a("h3",{attrs:{id:"afk-player-list-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afk-player-list-name","aria-hidden":"true"}},[e._v("#")]),e._v(" AFK Player List name")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 263")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/bbf657e",target:"_blank",rel:"noopener noreferrer"}},[e._v("bbf657e")]),e._v(").")])]),a("p",[e._v("This build introduces the "),a("code",[e._v("afk-list-name")]),e._v(" config property which is used to specify the player-list name format for players that are AFK.")]),a("p",[e._v("The property has two placeholders:")]),a("ul",[a("li",[a("code",[e._v("{USERNAME}")]),e._v(": The player's name")]),a("li",[a("code",[e._v("{PLAYER}")]),e._v(": The player's display name.")])]),a("p",[e._v("Here's an example of \"[AFK] "),a("em",[e._v("SupaHam")]),e._v('":')]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[e._v("afk-list-name")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v("'&7[AFK] &o{USERNAME}'")]),e._v("\n")])]),a("h3",{attrs:{id:"nickname-color-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nickname-color-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Nickname color permissions")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 246")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/9f75f1a",target:"_blank",rel:"noopener noreferrer"}},[e._v("9f75f1a")]),e._v(").")])]),a("p",[e._v("PR #198 introduced the ability to limit /nick to only allow color changes, ensuring players could still be identified by their original Minecraft name. The feature introduced a new permission node called "),a("code",[e._v("essentials.nick.changecolors")]),e._v(". When a player has the preceding permission, they are only allowed to add colours to their names. Where if the player was called SupaHam, he could only be able to use "),a("code",[e._v("/nick &5SupaHam")]),e._v(" but not "),a("code",[e._v("/nick &5TheSupaHam")]),e._v(", where the latter is prefixing the name with 'The'.")]),a("p",[e._v("However, this feature also introduced the "),a("code",[e._v("essentials.nick.changecolors.bypass")]),e._v(" permission node. Where if a player has the preceeding permission they are allowed to bypass the check and thus be able to change the characters of their name. This was originally created to ensure convenience for Server Operators without breaking functionality when they updated EssentialsX.")]),a("p",[a("strong",[e._v("Note")]),e._v(": This permission requires the "),a("code",[e._v("essentials.nick.color")]),e._v(" permission in order to use colors in the nickname to begin with.")]),a("h3",{attrs:{id:"teleport-to-spawn-when-joining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teleport-to-spawn-when-joining","aria-hidden":"true"}},[e._v("#")]),e._v(" Teleport to spawn when joining")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 361")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/b673630",target:"_blank",rel:"noopener noreferrer"}},[e._v("b673630")]),e._v(").")])]),a("p",[e._v("Requested in #345. Administrators can now specify whether joining players are to be teleported to spawn using the "),a("code",[e._v("spawn-on-join")]),e._v(" option found in the "),a("code",[e._v("config.yml")]),e._v(" file.")]),a("p",[a("code",[e._v("spawn-on-join")]),e._v(" accepts three different data types:")]),a("ol",[a("li",[e._v("Boolean - if the value is "),a("code",[e._v("true")]),e._v(", all players will be teleported to spawn when joining. If false, this feature is simply disabled.")]),a("li",[e._v("String - The value is interpreted as a group name and the user is checked for presence in said group when joining. If they belong to the group, then they will be teleported to spawn when joining.")]),a("li",[e._v("List of Strings - The value is interpreted as a list of groups that are treated as stated above in String.")])]),a("p",[e._v('Note: a group name of "*" is interpreted as a wildcard and catches all players, causing them to teleport to spawn on join.')]),a("p",[e._v("When "),a("code",[e._v("spawn-on-join")]),e._v(" is "),a("code",[e._v("true")]),e._v(" all players are teleport to their group spawn point. If no group spawn point has been set, the default spawn point, set with "),a("code",[e._v("/setspawn")]),e._v(", will be used instead.")]),a("p",[e._v("If Admins wish to exempt certain players from this feature when "),a("code",[e._v("spawn-on-join")]),e._v(" is "),a("code",[e._v("true")]),e._v(", they can give them the "),a("code",[e._v("essentials.spawn-on-join.exempt")]),e._v(" permission and they will log in where they left off, assuming no other plugin is interfering.")]),a("h3",{attrs:{id:"afk-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afk-message","aria-hidden":"true"}},[e._v("#")]),e._v(" AFK message")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 380")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/9dfa650d",target:"_blank",rel:"noopener noreferrer"}},[e._v("9dfa650d")]),e._v(").")]),a("em",[e._v("Requested in "),a("a",{attrs:{href:"/drtshock/Essentials/issues/590"}},[e._v("#590")]),e._v(". PR in "),a("a",{attrs:{href:"/drtshock/Essentials/pull/664"}},[e._v("#664")]),e._v(".")])]),a("p",[e._v("Players can now set their AFK message when using the "),a("code",[e._v("/afk")]),e._v(" command to notify others of their situation. This helps give insight on how long the player will be back so that other inquiring players can be informed and act appropriately.")]),a("p",[e._v("Players are informed with the AFK message by default when they "),a("code",[e._v("/msg")]),e._v(" a player who is AFK. However, when a player goes AFK with a message, by default the message will not be broadcast. However, this can be changed in the locale file (messages_en.proeprties, or whichever locale file you are using) by modifying "),a("code",[e._v("userIsAwayWithMessage")]),e._v(" and using the "),a("code",[e._v("{1}")]),e._v(" argument, the message. This can be found in the jar file.")]),a("p",[e._v("To set the AFK message simply type "),a("code",[e._v("/afk <message...>")]),e._v(" e.g. "),a("code",[e._v("/afk I'm walking my dog")]),e._v(".")]),a("p",[e._v("In order to use this feature a player must have the "),a("code",[e._v("essentials.afk.message")]),e._v(" permission.")]),a("p",[e._v("If a player is muted, they are not able to supply a message as it can be used to exploit their punishment.")]),a("h3",{attrs:{id:"pay-toggle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pay-toggle","aria-hidden":"true"}},[e._v("#")]),e._v(" Pay toggle")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 416")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/2493c65",target:"_blank",rel:"noopener noreferrer"}},[e._v("2493c65")]),e._v(").")]),a("em",[e._v("Requested in "),a("a",{attrs:{href:"/drtshock/Essentials/issues/413"}},[e._v("#413")]),e._v(".")])]),a("p",[e._v("Players have the ability to disable any and all payment via the "),a("code",[e._v("/paytoggle")]),e._v(" command. This can be used to combat players using "),a("code",[e._v("/pay")]),e._v(" as a means of spam towards other players, like celebrities on your server.")]),a("p",[a("code",[e._v("paytoggle")]),e._v(" also has the following aliases: "),a("code",[e._v("epaytoggle")]),e._v(", "),a("code",[e._v("payoff")]),e._v(", "),a("code",[e._v("epayoff")]),e._v(", "),a("code",[e._v("payon")]),e._v(", "),a("code",[e._v("epayon")])]),a("p",[a("code",[e._v("payoff")]),e._v(" will always disable payments to prevent errors. On the contrary, "),a("code",[e._v("payon")]),e._v(" will always enable payments.")]),a("h3",{attrs:{id:"pay-confirmation-toggle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pay-confirmation-toggle","aria-hidden":"true"}},[e._v("#")]),e._v(" Pay confirmation toggle")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 461")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/5f83766",target:"_blank",rel:"noopener noreferrer"}},[e._v("5f83766")]),e._v(").")]),a("em",[e._v("Requested in "),a("a",{attrs:{href:"/drtshock/Essentials/issues/1032"}},[e._v("#1032")]),e._v(".")])]),a("p",[e._v("In build "),a("code",[e._v("#458")]),e._v(", confirmation prompting for "),a("code",[e._v("/pay")]),e._v(" was introduced, but rapidly became repetitive for some players. This feature aims to combat it by allowing individual players to toggle the confirm prompt at their own risk.")]),a("p",[e._v("This feature introduces the command "),a("code",[e._v("/payconfirmtoggle")]),e._v(" which modifies "),a("code",[e._v("confirm-pay")]),e._v(" in the user's data file. "),a("code",[e._v("confirm-pay")]),e._v(" determines whether a player should be prompted to confirm a payment (regardless of amount) or not. By default, "),a("code",[e._v("confirm-pay")]),e._v(" is "),a("code",[e._v("true")]),e._v(", meaning enabled. Players would need to use the "),a("code",[e._v("/payconfirmtoggle")]),e._v(" command to change this property, and thus the behaviour of the "),a("code",[e._v("/pay")]),e._v(" command for themselves.")]),a("p",[a("code",[e._v("payconfirmtoggle")]),e._v(" also has the following aliases: "),a("code",[e._v("epayconfirmtoggle")]),e._v(", "),a("code",[e._v("payconfirmoff")]),e._v(", "),a("code",[e._v("epayconfirmoff")]),e._v(", "),a("code",[e._v("payconfirmon")]),e._v(", "),a("code",[e._v("epayconfirmon")]),e._v(", "),a("code",[e._v("payconfirm")]),e._v(", "),a("code",[e._v("epayconfirm")])]),a("h3",{attrs:{id:"teleport-to-exact-coordinates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teleport-to-exact-coordinates","aria-hidden":"true"}},[e._v("#")]),e._v(" Teleport to exact coordinates")]),a("p",[e._v("This feature was implemented in ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/0a563b9",target:"_blank",rel:"noopener noreferrer"}},[e._v("0a563b9")]),e._v(").")]),a("p",[e._v("This feature introduces the "),a("code",[e._v("teleport-to-center")]),e._v(" configuration feature. When set to "),a("code",[e._v("true")]),e._v(" - the default - all teleportations are centered to the block; technically, setting the x and z coordinate decimals to .5 and .5. When "),a("code",[e._v("teleport-to-center")]),e._v(" is set to "),a("code",[e._v("false")]),e._v(", all teleports are performed to the exact location as given.")]),a("h3",{attrs:{id:"mail-chat-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mail-chat-formatting","aria-hidden":"true"}},[e._v("#")]),e._v(" Mail chat formatting")]),a("p",[a("strong",[e._v("This feature was added in "),a("a",{attrs:{href:"https://ci.ender.zone/job/EssentialsX",target:"_blank",rel:"noopener noreferrer"}},[e._v("build 540")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/drtshock/Essentials/commit/665229b",target:"_blank",rel:"noopener noreferrer"}},[e._v("665229b")]),e._v(").")]),a("em",[e._v("Requested in "),a("a",{attrs:{href:"/drtshock/Essentials/issues/1560"}},[e._v("#1560")]),e._v(".")])]),a("p",[e._v("This feature introduces the ability to format messages using the traditional ampersand ("),a("code",[e._v("&")]),e._v(") syntax.")]),a("p",[e._v("The following table defines the permissions introduced in this feature.")]),a("table",[a("thead",[a("tr",[a("th",[e._v("Permission")]),a("th",[e._v("Description")])])]),a("tbody",[a("tr",[a("td",[e._v("essentials.mail.url")]),a("td",[e._v("Allow use of URLs")])]),a("tr",[a("td",[e._v("essentials.mail.color")]),a("td",[e._v("Allow use of colors")])]),a("tr",[a("td",[e._v("essentials.mail.magic")]),a("td",[e._v("Allow use of obfuscated/magic text styling")])]),a("tr",[a("td",[e._v("essentials.mail.format")]),a("td",[e._v("Allow use of chat styles")])])])]),a("h3",{attrs:{id:"helmet-slot-hat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helmet-slot-hat","aria-hidden":"true"}},[e._v("#")]),e._v(" Helmet slot hat")]),a("p",[a("strong",[e._v("This was introduced in "),a("a",{attrs:{href:"https://github.com/EssentialsX/Essentials/commit/7958cd0b880205edaeaf34420bafde8d5cc1f7ed",target:"_blank",rel:"noopener noreferrer"}},[e._v("7958cd0")]),e._v(" - the first release to include this feature was 2.15.0.")])]),a("p",[e._v("If "),a("code",[e._v("allow-direct-hat")]),e._v(" is enabled in the "),a("code",[e._v("config.yml")]),e._v(", then players with the permission "),a("code",[e._v("essentials.hat")]),e._v(" can click on their helmet slot to place any block on their head, not just helmets.")])])}],!1,null,null,null);t.default=o.exports}}]);