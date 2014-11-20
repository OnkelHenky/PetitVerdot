/**
 *  plugin.js is part of PetitVerdot
 *  Copyright (c) by Alexander Henka, 19.11.14.
 *  Project URL: https://github.com/OnkelHenky/PetitVerdot
 *
 * +--------------------------------------------------------------------------+
 * | LICENSE INFORMATION                                                      |
 * | ===================                                                      |
 * |                                                                          |
 * | Licensed under the Apache License, Version 2.0 (the "License");          |
 * | you may not use this file except in compliance with the License.         |
 * | You may obtain a copy of the License at                                  |
 * |                                                                          |
 * | http://www.apache.org/licenses/LICENSE-2.0                               |
 * |                                                                          |
 * | Unless required by applicable law or agreed to in writing, software      |
 * | distributed under the License is distributed on an "AS IS" BASIS,        |
 * | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 * | See the License for the specific language governing permissions and      |
 * | limitations under the License.                                           |
 * |                                                                          |
 * | For more information see:                                                |
 * | https://github.com/OnkelHenky/PetitVerdot/blob/master/README.md          |
 * |                                                                          |
 * +--------------------------------------------------------------------------+
 */

/*
 * +---------------------------------------------------------------------------+
 * |                              PetitVerdot                                  |
 * |                           ================                                |
 * |        Plugin for SeBuilder to export  Merlot's blueprint format          |
 * +---------------------------------------------------------------------------+
 *
 * +---------------------------------------------------------------------------+
 * | From Wikipedia                                                            |
 * | ==============                                                            |
 * |                                                                           |
 * | Petit Verdot is a variety of red wine grape, principally used in classic  |
 * | Bordeaux blends.It ripens much later than the other varieties in Bordeaux,|
 * | often too late, so it fell out of favour in its home region.              |
 * | When it does ripen, it is added in small amounts to add tannin, colour    |
 * | and flavour to the blend. It has attracted attention among winemakers     |
 * | in the New World, where it ripens more reliably and has been made into    |
 * | single varietal wine. It is also useful in 'stiffening' the mid palate    |
 * | of Cabernet Sauvignon blends.                                             |
 * |                                                                           |
 * | When young its aromas have been likened to banana and pencil shavings.    |
 * | Strong tones of violet and leather develop as it matures.                 |
 * |                                                                           |
 * | Source: http://en.wikipedia.org/wiki/Petit_Verdot                         |
 * +---------------------------------------------------------------------------+
 */


var PetitVerdot = PetitVerdot || {};

/**
 * @description
 * This function is getting called when the builder is shutting down.
 * Therefore, it allows to implement cleanup stuff here.
 */
PetitVerdot.shutdown = function(){

};



builder.registerPostLoadHook(function() {
    builder.gui.menu.addItem("suite", "PetitVerdot", 'ssdsdsd', function(){});
});

