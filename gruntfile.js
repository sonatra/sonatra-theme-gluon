/*
 * This file is part of the Sonatra package.
 *
 * (c) François Pluchino <francois.pluchino@sonatra.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*  global module */
/*  global grunt */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "css/bootstrap.css":       "less/bootstrap/bootstrap.less",
                    "css/bootstrap-theme.css": "less/bootstrap-theme.less",
                    "css/components.css":      "less/components.less"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
