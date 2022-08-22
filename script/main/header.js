/*

   Copyright 2018-2021 Nernar (github.com/nernar)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

if (this.MCSystem === undefined) {
	MCSystem = ModAPI.requireGlobal("MCSystem");
}

MCSystem.setLoadingTip(__name__ + ": Initialization Script");

IMPORT("Retention");

/**
 * Modification preloader scope.
 */
const PRELOADER = (function() {
	let preloader = __mod__.compiledPreloaderScripts.get(0);
	if (!preloader.isRunning()) {
		__mod__.RunPreloaderScripts();
	}
	return preloader.getScope();
})();

// Currently build information
let DEVELOP = true;
let IN_CREATIVE = (function() {
	return PRELOADER.IN_CREATIVE || false;
})();

// Runtime gameplay changed values
let oneLamp = false;
let twoLamp = false;

IMPORT("Transition");
IMPORT("Action");

/**
 * Resolves environment worlds storage.
 * @returns {string} path to worlds
 */
const getWorldsStorageLocation = function() {
	return PRELOADER.getWorldsStorageLocation();
};

/**
 * Resolves modification world directory.
 * @returns {string} world directory
 */
const getModificationWorldDirectory = function() {
	return PRELOADER.getModificationWorldDirectory();
};

/**
 * Resolves modification world name.
 * @returns {string} world name
 */
const getModificationWorldName = function() {
	return PRELOADER.getModificationWorldName();
};

/**
 * Resolves modification world location.
 * @returns {string} path to world
 */
const getModificationWorldLocation = function() {
	return PRELOADER.getModificationWorldLocation();
};

/**
 * If due world extraction something happened, it
 * must be resolved into loading stage.
 * @returns {null|Error} something
 */
const getWorldExtractionError = function() {
	return PRELOADER.worldExtractionError;
};
