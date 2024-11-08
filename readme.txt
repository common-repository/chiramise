=== Chiramise ===

Contributors: Takahashi_Fumiki  
Tags: membership
Requires at least: 5.0.0  
Tested up to: 5.2.1  
Requires PHP: 5.5  
Stable tag: 1.1.2
License: GPL 2.0 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Chiramise makes your contents members-only.

== Description  ==

Chiramise makes specified post type as __members only__.
It based on [WordPress' capability](https://codex.wordpress.org/Roles_and_Capabilities) so you can customize it with WordPress way.
Default capability is `read` which means that only logged in users can read contents.

**NOTICE: Requires PHP5.5 and over!**

== Installation  ==

Install itself is easy. Auto install from admin panel is recommended. Search with `chiramise`.

1. Download and unpack plugin file, upload `chiramise` folder to `/wp-content/plugins` directory.
2. Activate it from admin panel.
3. Choose which post type to be 'chiramise' on 'Setting > General' on dmin panel.

= Use latest source on github =

You can get this plugin from [github](https://github.com/hametuha/chiramise/).

== Frequently Asked Questions ==

If you have, post it to [ginism.info](https://gianism.info/add-on/chiramise)

== Screenshots  ==

Sorry, no screen shots.

== Changelog  ==

Here is a list of change logs.

= 1.1.2 =

* Bugfix: prevent REST API to be filtered.

= 1.1.1 =

* Add filter for capability check for cached WordPress.

= 1.1.0 =

* Add REST API.

= 1.0.1 =

* Add TOC generator.

= 1.0.0 =

* Initial release.
