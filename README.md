# toggle-wpadminbar
A simple jQuery plugin I wrote to temporarily hide the wordpress admin bar. 

As a frontend dev for primary Wordpress sites I've found that the wordpress admin bar can often get in the way, especially if I'm trying to work on elements at the top of the page. I can't always get a clear idea of how it's going to look. Also, if you're resizing your browser while working on styling the bar can glitch. 

This is a simple plugin that hides the wordpress admin bar. Then a mouseleave() event triggers show button to appear. When clicked the admin bar comes back. Simple :)

## Dependencies
- jQuery

## Mobile functionality
For mobile screen widths the "Hide Adminbar" button become an eye-slash icon. You can hide the menu with this button, but to see then admin bar again you'll need to reload.

## Notes
This is a very alpha plugin. You may need to make adjustments to make this work for your theme. Please do not put this on your website if you're unfamiliar with jQuery.
