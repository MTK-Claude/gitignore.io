/**
 * Created with IntelliJ IDEA.
 * User: josephblau
 * Date: 2/8/13
 * Time: 7:49 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
  $("#ignoreSearch").select2({
    placeholder: "Search Operating Systems, IDEs, or Programming Languages",
    tags: true,
    minimumInputLength: 1,
    data: [{"id":"actionscript","text":"Actionscript"},{"id":"android","text":"Android"},{"id":"appceleratortitanium","text":"AppceleratorTitanium"},{"id":"autotools","text":"Autotools"},{"id":"bancha","text":"Bancha"},{"id":"c++","text":"C++"},{"id":"c","text":"C"},{"id":"cakephp","text":"CakePHP"},{"id":"cfwheels","text":"CFWheels"},{"id":"clojure","text":"Clojure"},{"id":"cmake","text":"CMake"},{"id":"codeigniter","text":"CodeIgniter"},{"id":"compass","text":"Compass"},{"id":"concrete5","text":"Concrete5"},{"id":"coq","text":"Coq"},{"id":"dart","text":"Dart"},{"id":"delphi","text":"Delphi"},{"id":"django","text":"Django"},{"id":"drupal","text":"Drupal"},{"id":"eagle","text":"Eagle"},{"id":"erlang","text":"Erlang"},{"id":"expressionengine","text":"ExpressionEngine"},{"id":"finale","text":"Finale"},{"id":"forcedotcom","text":"ForceDotCom"},{"id":"fuelphp","text":"FuelPHP"},{"id":"gcov","text":"gcov"},{"id":"go","text":"Go"},{"id":"grails","text":"Grails"},{"id":"gwt","text":"GWT"},{"id":"haskell","text":"Haskell"},{"id":"java","text":"Java"},{"id":"jboss","text":"Jboss"},{"id":"jekyll","text":"Jekyll"},{"id":"joomla","text":"Joomla"},{"id":"jython","text":"Jython"},{"id":"kohana","text":"Kohana"},{"id":"latex","text":"LaTeX"},{"id":"leiningen","text":"Leiningen"},{"id":"lemonstand","text":"LemonStand"},{"id":"lilypond","text":"Lilypond"},{"id":"lithium","text":"Lithium"},{"id":"magento","text":"Magento"},{"id":"maven","text":"Maven"},{"id":"nanoc","text":"nanoc"},{"id":"node","text":"Node"},{"id":"objective-c","text":"Objective-C"},{"id":"ocaml","text":"OCaml"},{"id":"opa","text":"Opa"},{"id":"opencart","text":"opencart"},{"id":"oracleforms","text":"OracleForms"},{"id":"perl","text":"Perl"},{"id":"playframework","text":"PlayFramework"},{"id":"plone","text":"Plone"},{"id":"python","text":"Python"},{"id":"qooxdoo","text":"Qooxdoo"},{"id":"qt","text":"Qt"},{"id":"r","text":"R"},{"id":"rails","text":"Rails"},{"id":"rhodesrhomobile","text":"RhodesRhomobile"},{"id":"ruby","text":"Ruby"},{"id":"scala","text":"Scala"},{"id":"sdcc","text":"Sdcc"},{"id":"seamgen","text":"SeamGen"},{"id":"sketchup","text":"SketchUp"},{"id":"sugarcrm","text":"SugarCRM"},{"id":"symfony","text":"Symfony"},{"id":"symfony2","text":"Symfony2"},{"id":"symphonycms","text":"SymphonyCMS"},{"id":"target3001","text":"Target3001"},{"id":"tasm","text":"Tasm"},{"id":"textpattern","text":"Textpattern"},{"id":"turbogears2","text":"TurboGears2"},{"id":"typo3","text":"Typo3"},{"id":"unity","text":"Unity"},{"id":"visualstudio","text":"VisualStudio"},{"id":"waf","text":"Waf"},{"id":"wordpress","text":"WordPress"},{"id":"yii","text":"Yii"},{"id":"zendframework","text":"ZendFramework"},{"id":"archives","text":"Archives"},{"id":"cvs","text":"CVS"},{"id":"eclipse","text":"Eclipse"},{"id":"emacs","text":"Emacs"},{"id":"espresso","text":"Espresso"},{"id":"flexbuilder","text":"FlexBuilder"},{"id":"intellij","text":"IntelliJ"},{"id":"linux","text":"Linux"},{"id":"matlab","text":"Matlab"},{"id":"mercurial","text":"Mercurial"},{"id":"modelsim","text":"ModelSim"},{"id":"monodevelop","text":"MonoDevelop"},{"id":"netbeans","text":"NetBeans"},{"id":"osx","text":"OSX"},{"id":"phpstorm","text":"PhPStorm"},{"id":"pycharm","text":"PyCharm"},{"id":"quartus2","text":"Quartus2"},{"id":"redcar","text":"Redcar"},{"id":"rubymine","text":"RubyMine"},{"id":"sass","text":"SASS"},{"id":"sbt","text":"SBT"},{"id":"sublimetext","text":"SublimeText"},{"id":"svn","text":"SVN"},{"id":"tags","text":"Tags"},{"id":"textmate","text":"TextMate"},{"id":"vim","text":"vim"},{"id":"virtualenv","text":"VirtualEnv"},{"id":"windows","text":"Windows"},{"id":"xilinxise","text":"XilinxISE"}]
  });


});
function generateGitIgnore(){
  window.location="/api/"+$("#ignoreSearch").select2("val");
  $("#ignoreSearch").select2("val", "");
}