const constants = {
    colors: { "002": "random", "055": "red", "056": "yellow", "057": "blue", "058": "green", "059": "orange", "060": "purple" },
    coloredCandy: { "002": "random", "018": "pepper_candy", "036": "frog", "045": "striped_horizontal", "046": "striped_vertical", "047": "wrapped", "049": "jellyfish", "051": "key", "052": "lucky", "032": "mystery", "033": "chameleon", "050": "extra_time_and_moves", "091": "jellyfish_striped", "092": "jellyfish_wrapped", "093": "jellyfish_colorbomb", "235": "cracked_candy", "084": "extra_moves_candy" },
    candy: { "044": "bomb", "043": "coconut_wheel", "061": "ufo" },
    sugarCoats: { "134": "sugarcoat_1", "135": "sugarcoat_2", "136": "sugarcoat_3" },
    locks: { "008": "licorice", "025": "marmalade", "038": "mulock1", "039": "mulock2", "040": "mulock3", "041": "mulock4", "042": "mulock5", "268": "vent_cotton" },
    glass: { "122": "glass_tile_1", "123": "glass_tile_2", "124": "glass_tile_3" },
    blockers: { "007": "block_frosting", "053": "chocolate_frog", "009": "chocolate", "017": "licorice_square", "019": "block_multi_frosting1", "020": "block_multi_frosting2", "021": "block_multi_frosting3", "022": "block_multi_frosting4", "023": "block_multi_frosting5", "024": "chocolate_spawner", "035": "cake_bomb", "054": "shell_1", "062": "magic_mixer", "066": "bobber", "079": "block_waffle1", "080": "block_waffle2", "081": "block_waffle3", "082": "block_waffle4", "083": "block_waffle5", "094": "dark_chocolate_1", "095": "dark_chocolate_2", "096": "dark_chocolate_3", "097": "dark_chocolate_4", "098": "dark_chocolate_5", "129": "chain_layer1_c", "130": "chain_layer2_c", "131": "chain_layer3_c", "132": "chain_layer4_c", "133": "chain_layer5_c", "157": "shell_3", "158": "shell_2", "159": "bubble_pop_1", "160": "bubble_pop_2", "161": "bubble_pop_3", "162": "bubble_pop_4", "163": "bubble_pop_5", "211": "dark_chocolate_spawner_1", "212": "dark_chocolate_spawner_2", "213": "dark_chocolate_spawner_3", "220": "jelly_jar_1", "221": "jelly_jar_2", "230": "gumball_machine", "037": "toffee_tornado", "070": "pinata", "073": "pinata_crash", "074": "pinata_link1", "075": "pinata_link2", "076": "pinata_link3", "077": "pinata_unbreakable", "078": "pinata_empty", "156": "rainbow_rapid_mold", "099": "crystallized_licorice", "100": "adjecent_bobber", "101": "mystery_blocker", "102": "static_licorice_1", "103": "static_licorice_2", "104": "static_licorice_3", "105": "static_licorice_4", "106": "static_licorice_5", "202": "layered_mystery_1", "203": "layered_mystery_2", "204": "layered_mystery_3", "205": "blue_fizz_1", "206": "blue_fizz_2", "207": "blue_fizz_3", "208": "blue_fizz_4", "231": "summer_fizz_1", "232": "summer_fizz_2", "233": "summer_fizz_3", "234": "summer_fizz_4", "236": "block_multi_frosting6", "237": "block_multi_frosting7", "238": "block_multi_frosting8" },
    bonbon: { "182": "bonbon_colorbomb_1", "183": "bonbon_colorbomb_2", "184": "bonbon_colorbomb_3", "185": "bonbon_colorbomb_4", "186": "bonbon_horizontal_1", "187": "bonbon_horizontal_2", "188": "bonbon_horizontal_3", "189": "bonbon_horizontal_4", "190": "bonbon_vertical_1", "191": "bonbon_vertical_2", "192": "bonbon_vertical_3", "193": "bonbon_vertical_4", "194": "bonbon_fish_1", "195": "bonbon_fish_2", "196": "bonbon_fish_3", "197": "bonbon_fish_4", "198": "bonbon_wrapped_1", "199": "bonbon_wrapped_2", "200": "bonbon_wrapped_3", "201": "bonbon_wrapped_4", "254": "bear1", "255": "bear2", "256": "bear3", "257": "bear4", "258": "bear5", "259": "bear6", "260": "empty_honey_1", "261": "empty_honey_2", "262": "empty_honey_3", "263": "empty_honey_4", "264": "empty_honey_5", "265": "empty_honey_6" },
    tiles: { "empty": "empty", "000": "none", "001": "grid", "003": "jelly", "004": "jelly2", "064": "blue_tile", "065": "black_tile", "209": "rock1", "210": "rock2", "266": "jelly3", "267": "jelly4" },
    ingredients: { "048": "cherry", "126": "hazelnut", "920": "butter" },
    walldown: { "087": "wall_down", "165": "licorice_wall_down", "110": "destructible_wall_1_down", "114": "destructible_wall_2_down", "118": "destructible_wall_3_down", "169": "destructible_wall_lic_1_down", "173": "destructible_wall_lic_2_down", "177": "destructible_wall_lic_3_down" },
    wallup: { "086": "wall_up", "164": "licorice_wall_up", "109": "destructible_wall_1_up", "113": "destructible_wall_2_up", "117": "destructible_wall_3_up", "168": "destructible_wall_lic_1_up", "172": "destructible_wall_lic_2_up", "176": "destructible_wall_lic_3_up" },
    wallright: { "089": "wall_right", "167": "licorice_wall_right", "112": "destructible_wall_1_right", "116": "destructible_wall_2_right", "120": "destructible_wall_3_right", "171": "destructible_wall_lic_1_right", "175": "destructible_wall_lic_2_right", "179": "destructible_wall_lic_3_right" },
    wallleft: { "088": "wall_left", "166": "licorice_wall_left", "111": "destructible_wall_1_left", "115": "destructible_wall_2_left", "119": "destructible_wall_3_left", "170": "destructible_wall_lic_1_left", "174": "destructible_wall_lic_2_left", "178": "destructible_wall_lic_3_left" },
    rainbowcannontop: { "152": "rainbow_rapid_cannon_top" },
    rainbowcannonbottom: { "153": "rainbow_rapid_cannon_bottom" },
    rainbowcannonleft: { "154": "rainbow_rapid_cannon_left" },
    rainbowcannonright: { "155": "rainbow_rapid_cannon_right" },
    cannons: { "027": "cannon_ingredient", "028": "cannon_licorice", "029": "cannon_bomb", "030": "cannon_mulock_key", "031": "cannon_mystery", "067": "cannon_chameleon", "068": "cannon_lucky", "069": "cannon_extra_time_and_moves", "071": "cannon_striped_candy", "072": "cannon_wrapped_candy", "085": "cannon_extra_moves_candy", "107": "cannon_striped_horizontal", "108": "cannon_striped_vertical", "239": "cannon_cracked_candy", "127": "cannon_colorbomb", "128": "cannon_fish", "240": "cannon_wheel", "241": "cannon_ufo", "242": "cannon_sugar_drops" },
    path: { "140": "rainbow_stream_vertical", "141": "rainbow_stream_horizontal", "142": "rainbow_stream_BL", "143": "rainbow_stream_BR", "144": "rainbow_stream_TL", "145": "rainbow_stream_TR", "146": "rainbow_stream_TBL", "147": "rainbow_stream_TBR", "148": "rainbow_stream_TLR", "149": "rainbow_stream_BLR", "150": "rainbow_stream_all_directions", "151": "rainbow_stream_intersection_point" },
    leaflayer: { "063": "leaf" },
    indicators: { "994": "vertical_indicator", "995": "horizontal_indicator", "996": "left_indicator", "997": "up_indicator", "998": "down_indicator", "999": "right_indicator" },
    notes: { "006": "blocker_note", "": "rip_note" },
    entry_note: { "012": "portal_entry_note" },
    exit_note: { "013": "portal_exit_note" },
    portalentrance: { "990": "portal_entrance", "014": "portal_entrance_hidden" },
    portalexit: { "991": "portal_exit", "015": "portal_exit_hidden" }
};

const elements_ids = Object.assign({}, constants.portalentrance, constants.portalexit, constants.rainbowcannontop, constants.rainbowcannonbottom, constants.rainbowcannonleft, constants.rainbowcannonright, constants.indicators, constants.leaflayer, constants.colors, constants.cannons, constants.walldown, constants.wallup, constants.bonbon, constants.path, constants.wallright, constants.wallleft, constants.coloredCandy, constants.candy, constants.blockers, constants.tiles, constants.ingredients, constants.sugarCoats, constants.locks, constants.glass, constants.notes, constants.entry_note, constants.exit_note, { "010": "ingredients_exit", "026": "candy_entrance", "005": "candy_cannon" });
const elements_names = _.invert(elements_ids);

const stretched = ["009", "019", "020", "021", "022", "023", "025", "006", "123", "124", "134", "135", "136", "054", "157", "158", "024", "211", "212", "213", "220", "221", "159", "160", "161", "162", "163", "062"].concat(Object.keys(constants.bonbon));
const small = [].concat(Object.keys(constants.colors), Object.keys(constants.coloredCandy), ["017", "002", "079", "080", "081", "082", "083", "044", "043", "125", "126"]);

const sugarCoatable = ["044", "017", "079", "080", "081", "082", "083", "125", "126", "043", "061"];

const elementsFolder = "elements/";

const state = {
    selectedColor: "002",
    selectedElement: "002",
    elementLayer: "normal",
    lastPortalObject: undefined,
    isPortalTimeout: false,
    preferredColors: [0, 1, 2, 3, 4],
};

const orderItems = { "1": "red", "2": "blue", "3": "yellow", "4": "orange", "5": "purple", "6": "green", "7": "wrapped", "8": "striped", "9": "colorbomb", "10": "striped + striped", "11": "striped + wrapped", "12": "striped + colorbomb", "13": "colorbomb + colorbomb", "14": "wrapped + colorbomb", "15": "wrapped + wrapped", "16": "chocolate", "17": "frosting", "18": "popcorn", "19": "licorice", "20": "pepper bomb", "21": "jellyfish", "22": "cake bomb", "23": "mystery candy", "24": "magic mixer", "32": "bubblegum", "39": "gumballs", "40": "liquorice laces", "41": "single layered mystery blocker", "42": "layered mystery blocker", "43": "winter fizz", "44": "summer fizz", "45": "cracked candy", "46": "sugar drop", "47": "honey bear" };

const magicMixerItems = { "0": "All Blockers", "1": "pepper bomb", "2": "licorice", "3": "frosting (1 layer)", "4": "frosting (2 layers)", "5": "frosting (3 layers)", "6": "frosting (4 layers)", "7": "frosting (5 layers)", "74": "frosting (6 layers)", "75": "frosting (7 layers)", "76": "frosting (8 layers)", "8": "chocolate", "9": "licorice lock", "10": "marmalade", "30": "bubblegum pop (1 layer)", "31": "bubblegum pop (2 layers)", "32": "bubblegum pop (3 layers)", "33": "bubblegum pop (4 layers)", "34": "bubblegum pop (5 layers)", "55": "popcorn", "60": "Liquorice Lace (1 Layered)", "61": "Liquorice Lace (2 Layered)", "62": "Liquorice Lace (3 Layered)", "63": "Liquorice Lace (4 Layered)", "64": "Liquorice Lace (5 Layered)", "65": "Winter Fizz (1 Layered)", "66": "Winter Fizz (2 Layered)", "67": "Winter Fizz (3 Layered)", "68": "Winter Fizz (4 Layered)", "69": "Summer Fizz (1 Layered)", "70": "Summer Fizz (2 Layered)", "71": "Summer Fizz (3 Layered)", "72": "Summer Fizz (4 Layered)", "73": "Cracked Candy" };

const cannonCodes = [["fallingIcing", "Level"], ["licorice"], ["luckyCandy"], ["mysteryCandy"], ["mulockCandy"], ["pepperCandy", "ExplosionTurns"], ["stripedCandy"], ["stripedRowCandy"], ["stripedColumnCandy"], ["timeCandy"], ["wrappedCandy"], ["extraMoves"], ["fish"], ["crackedCandy"], ["shield", "Level"], ["chameleonCandy"], ["colorBomb"], ["cocoWheel"], ["ufoCandy"], ["sugarDrop"]];

var currentMode = "Classic moves";

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

function getLayerFromId(id) {
    let layer = undefined;

    keys = Object.keys(layerElements);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        if (layerElements[key].includes(id)) {
            layer = key;
            break;
        }
    }
    return layer;
}

function toggleDreamworld(object) {
    document.getElementById("dreamworldoptions").style.display = object.checked ? "block" : "none";
}

function switchedRequirement(object) {
    document.getElementById("requirementwarning").style.display = "none";
    let requirement = object.value;
    let image = object.parentNode.querySelector("img");
    image.src = "ui/hud/" + orderItems[requirement] + ".png";
}

function switchedRequirementIngredient(object) {
    document.getElementById("requirementwarning").style.display = "none";
    let requirement = object.value;
    let image = object.parentNode.querySelector("img");
    image.src = "ui/hud/" + requirement + ".png";
}

function removeRequirement(object) {
    object.parentNode.remove();
    document.getElementById("requirementwarning").style.display = "none";
}

function addRequirement(isIngredient = false, ignoreLimit = false) {
    let requirementsObj = document.getElementById("requirements");

    if (!ignoreLimit) {
        if (requirementsObj.childNodes.length > 100) {
            document.getElementById("requirementwarning").style.display = "block";
            return;
        } else {
            document.getElementById("requirementwarning").style.display = "none";
        }
    }

    section = document.createElement("div");
    section.classList.add("sideoptions");
    let typeText = "Order";
    section.setAttribute("reqtype", "order");
    if (isIngredient) {
        typeText = "Ingredient";
        section.setAttribute("reqtype", "ingredient");
    }
    section.innerHTML = '<button style="position: 102px; right: 90px; top: 20px; border-radius: 50%; background-color: #00000090; width: 35px; height: 35px; font-size: 1.2em; color: white; border: none; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="removeRequirement(this)">✖</button> <p class="BananaSplit break" style="font-weight: bold; color: white; text-align: center;">Requirement:</p> <img src="ui/hud/red.png" style="max-width: 30px; max-height: 30px;"> <p class="BananaSplit" style="margin: 10px; display: block; color: white; text-align: center;">' + typeText + ':</p> <select onchange="switchedRequirement(this)"> </select> <div class="break"></div> <img src="ui/btn_quit.png" style="max-width: 0px; max-height: 0px;"> <p class="BananaSplit" style="margin: 10px; display: block; color: white; text-align: center;">X Amount:</p> <input style="width: 50px; text-align: center;" placeholder="0" type="number">';

    select = section.querySelector("select");
    if (!isIngredient) {
        Object.keys(orderItems).forEach(function (key) {
            option = document.createElement("option");
            option.value = key;
            option.innerHTML = orderItems[key];
            select.appendChild(option);
        });
    } else {
        select.setAttribute("onchange", "switchedRequirementIngredient(this)");
        section.querySelector("img").src = "ui/hud/cherry.png";

        let option;
        option = document.createElement("option");
        option.value = "cherry";
        option.innerHTML = "cherry";
        select.appendChild(option);

        option = document.createElement("option");
        option.value = "hazelnut";
        option.innerHTML = "hazelnut";
        select.appendChild(option);

        option = document.createElement("option");
        option.value = "butter";
        option.innerHTML = "butter";
        select.appendChild(option);

        option = document.createElement("option");
        option.value = "liquorice_root";
        option.innerHTML = "liquorice root";
        select.appendChild(option);

        option = document.createElement("option");
        option.value = "almond";
        option.innerHTML = "almond";
        select.appendChild(option);
    }
    requirementsObj.prepend(section);
}

function switchedMixerOption(object) {
    document.getElementById("requirementwarning").style.display = "none";
    let requirement = object.value;
    let image = object.parentNode.querySelector("img");
    image.src = "ui/hud/" + magicMixerItems[requirement] + ".png";
}

function addMixerOption() {
    let requirementsObj = document.getElementById("mixeroptions");

    section = document.createElement("div");
    section.classList.add("sideoptions");
    section.setAttribute("reqtype", "mixeroption");
    section.innerHTML = '<button style="position: 102px; right: 90px; top: 20px; border-radius: 50%; background-color: #00000090; width: 35px; height: 35px; font-size: 1.2em; color: white; border: none; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="removeRequirement(this)">✖</button><div class="break"></div><img src="ui/hud/All Blockers.png" style="max-width: 30px; max-height: 30px;"><p class="BananaSplit" style="margin: 10px; display: block; color: white; text-align: center;">Blocker:</p><select onchange="switchedMixerOption(this)"></select><div class="break"></div>';

    select = section.querySelector("select");

    Object.keys(magicMixerItems).forEach(function (key) {
        option = document.createElement("option");
        option.value = key;
        option.innerHTML = magicMixerItems[key];
        select.appendChild(option);
    });

    requirementsObj.prepend(section);
}

function selectMode() {
    mode = document.querySelector('input[name="leveltype"]:checked').value;
    if (mode === "Classic" || mode == "Jelly Time" || mode == "Drop Time" || mode == "Order Time" || mode == "Jelly Color Time") {
        document.getElementById("moves-section").style.display = "none";
        document.getElementById("time-section").style.display = "flex";
    } else {
        document.getElementById("moves-section").style.display = "flex";
        document.getElementById("time-section").style.display = "none";
    }

    document.getElementById("requirements-options-section").style.display = "none";

    if (mode.includes('Drop down') || mode.includes('Jelly Drop') || mode.includes('Order Drop') || mode.includes('Super Mix') || mode.includes('Drop Time') || mode.includes('Jelly Color Drop')) {
        document.getElementById("requirements-options-section").style.display = "block";
        document.getElementById("addingredient").style.display = "block";
    } else {
        document.getElementById("addingredient").style.display = "none";
        let requirementsContainer = document.getElementById("requirements");
        Array.from(requirementsContainer.children).forEach(function (child) {
            if (child.getAttribute("reqtype") == "ingredient") {
                child.remove();
            }
        });
    }

    if (mode.includes('Order') || mode.includes('Super Mix') || mode.includes('Jelly Color Order')) {
        document.getElementById("requirements-options-section").style.display = "block";
        document.getElementById("addorder").style.display = "block";
    } else {
        document.getElementById("addorder").style.display = "none";
        let requirementsContainer = document.getElementById("requirements");
        Array.from(requirementsContainer.children).forEach(function (child) {
            if (child.getAttribute("reqtype") == "order") {
                child.remove();
            }
        });
    }

    currentMode = mode;
}

function togglePreferred(object) {
    color = Number(object.getAttribute("value"));

    if (!state.preferredColors.includes(color)) {
        if (!(object.classList.contains("preferredselected"))) {
            object.classList.add("preferredselected");
        }

        state.preferredColors.push(color);
    } else {
        object.classList.remove("preferredselected");

        state.preferredColors.splice(state.preferredColors.indexOf(color), 1);
    }
}

function toggleDropdown(object) {
    let dropped = document.getElementById(object.getAttribute("associd"));
    let p = object.querySelector(".arrow");

    if (dropped.style.display == "none") {
        dropped.style.display = "block";
        p.style.transform = "rotate(" + 0 + "deg)";
    } else {
        dropped.style.display = "none";
        p.style.transform = "rotate(" + 90 + "deg)";
    }
}

function updateColor(object, color) {
    try {
        document.querySelector(".colorselected").classList.remove("colorselected");
    } catch { }
    object.classList.add("colorselected");
    state.selectedColor = elements_names[color];
}

function removeCake(object) {
    let cake = object.getAttribute("cake");
    let tiles = [];
    let row = Number(object.getAttribute("pos-row"));
    let column = Number(object.getAttribute("pos-col"));
    let level = document.getElementById("level");

    resetTileAttributes(object);

    if (cake == "1") {
        tiles = [[row, column + 1], [row + 1, column], [row + 1, column + 1]];
    } else if (cake == "2") {
        tiles = [[row, column - 1], [row + 1, column - 1], [row + 1, column]];
    } else if (cake == "3") {
        tiles = [[row - 1, column], [row - 1, column + 1], [row, column + 1]];
    } else if (cake == "4") {
        tiles = [[row - 1, column - 1], [row - 1, column], [row, column - 1]];
    }

    tiles.forEach(function (pos) {
        let otherObject = level.children[pos[0]].children[pos[1]];
        resetTileAttributes(otherObject);
    });
}

function removePortal(object, isExit) {
    let level = document.getElementById("level");
    let objToDelete;
    if (isExit) {
        object.setAttribute('portal_exit', '');
        object.querySelector(".portal_exit").src = '';
        object.querySelector(".portal_exit").setAttribute("class", "portal_exit default small");
        try {
            objToDelete = level.children[object.getAttribute('portalentrancerow')].children[object.getAttribute('portalentrancecol')];
            objToDelete.setAttribute('portal_entrance', '');
            objToDelete.querySelector(".portal_entrance").src = '';
            objToDelete.setAttribute('portalexitrow', '');
            objToDelete.setAttribute('portalexitcol', '');
        } catch (err) { }
        object.setAttribute('portalentrancerow', '');
        object.setAttribute('portalentrancecol', '');
    } else {
        object.setAttribute('portal_entrance', '');
        object.querySelector(".portal_entrance").src = '';
        object.querySelector(".portal_entrance").setAttribute("class", "portal_entrance default small");
        try {
            objToDelete = level.children[object.getAttribute('portalexitrow')].children[object.getAttribute('portalexitcol')];
            objToDelete.setAttribute('portal_exit', '');
            objToDelete.querySelector(".portal_exit").src = '';
            objToDelete.setAttribute('portalentrancerow', '');
            objToDelete.setAttribute('portalentrancecol', '');
        } catch (err) { }
        object.setAttribute('portalexitrow', '');
        object.setAttribute('portalexitcol', '');
    }
}

function updateTile(object) {
    try {
        if (state.elementLayer !== "tile" && object.getAttribute("tile") === "000") {
            return;
        }

        if (state.isPortalTimeout) { return; }

        let level = document.getElementById("level");

        let row = Number(object.getAttribute("pos-row"));
        let column = Number(object.getAttribute("pos-col"));

        isCake = object.getAttribute("cake");
        if (isCake !== undefined && isCake !== "" && state.elementLayer === "normal") {
            removeCake(object);
        }

        let isPortalEntrance = object.getAttribute('portal_entrance');
        let isPortalExit = object.getAttribute('portal_exit');

        let image = object.querySelector("." + state.elementLayer);

        try {
            if (state.elementLayer == "portal_entrance") {
                if (isPortalEntrance) {
                    removePortal(object, false);
                }
                state.lastPortalObject = object;
            }
            else if (state.elementLayer == "portal_exit") {
                if (isPortalExit) {
                    removePortal(object, true);
                }

                object.setAttribute('portalentrancerow', state.lastPortalObject.getAttribute('pos-row'));
                object.setAttribute('portalentrancecol', state.lastPortalObject.getAttribute('pos-col'));
                state.lastPortalObject.setAttribute('portalexitrow', row);
                state.lastPortalObject.setAttribute('portalexitcol', column);
                state.lastPortalObject = undefined;
            }
            else if (state.elementLayer == "wallup") {
                let otherObject = level.children[row - 1].children[column];
                let hasWall = otherObject.getAttribute("walldown");
                if (hasWall !== null && hasWall !== "") {
                    otherObject.setAttribute("walldown", "");
                    otherObject.querySelector("img.walldown").src = "";
                }
            }
            else if (state.elementLayer == "walldown") {
                let otherObject = level.children[row + 1].children[column];
                let hasWall = otherObject.getAttribute("wallup");
                if (hasWall !== null && hasWall !== "") {
                    otherObject.setAttribute("wallup", "");
                    otherObject.querySelector("img.wallup").src = "";
                }
            }
            else if (state.elementLayer == "wallleft") {
                let otherObject = level.children[row].children[column - 1];
                let hasWall = otherObject.getAttribute("wallright");
                if (hasWall !== null && hasWall !== "") {
                    otherObject.setAttribute("wallright", "");
                    otherObject.querySelector("img.wallright").src = "";
                }
            }
            else if (state.elementLayer == "wallright") {
                let otherObject = level.children[row].children[column + 1];
                let hasWall = otherObject.getAttribute("wallleft");
                if (hasWall !== null && hasWall !== "") {
                    otherObject.setAttribute("wallleft", "");
                    otherObject.querySelector("img.wallleft").src = "";
                }
            }
        } catch (err) {
            console.error("Error occurred:", err);
        }

        if (state.elementLayer == "tile") {
            if (state.selectedElement === "empty") {
                if (isCake !== undefined && isCake !== "") {
                    removeCake(object);
                }

                if (isPortalEntrance) {
                    try {
                        removePortal(object, false);
                    } catch (err) { }
                }
                if (isPortalExit) {
                    try {
                        removePortal(object, true);
                    } catch (err) { }
                }

                layers.forEach(function (layer) {
                    if (object.hasAttribute(layer) && layer != "tile") {
                        object.setAttribute(layer, "");
                    }
                });
                object.childNodes.forEach(function (node) {
                    if (!node.classList.contains("selectimg") && !node.classList.contains("tile")) {
                        node.src = "";
                    }
                });
                object.setAttribute("color", "");
                return;
            }

            object.setAttribute("tile", state.selectedElement);
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";

            if (state.selectedElement === "000") {
                if (isCake !== undefined && isCake !== "") {
                    removeCake(object);
                }

                if (isPortalEntrance) {
                    removePortal(object, false);
                }

                if (isPortalExit) {
                    removePortal(object, true);
                }

                layers.forEach(function (layer) {
                    if (object.hasAttribute(layer)) {
                        object.setAttribute(layer, "");
                    }
                });
                object.childNodes.forEach(function (node) {
                    if (!node.classList.contains("selectimg") && !node.classList.contains("tile")) {
                        node.src = "";
                    }
                });
                object.setAttribute("color", "");
            }
        }
        if (state.elementLayer == "sugarcoat") {
            if (object.getAttribute("normal") in constants.coloredCandy || sugarCoatable.includes(object.getAttribute("normal"))) {
                object.setAttribute(state.elementLayer, state.selectedElement);
                image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
            }
            else {
                return;
            }
        }
        else if (state.selectedElement == "035") {
            let level = document.getElementById("level");

            if (row >= 8 || column >= 8) {
                return;
            }

            let isCake = object.getAttribute("cake");
            if (isCake !== undefined && isCake !== "") {
                removeCake(object);
            }
            image.src = elementsFolder + "cake_top_left" + ".png";
            image.setAttribute("class", "normal default stretch");
            object.setAttribute("normal", state.selectedElement);
            object.setAttribute("color", "");
            object.setAttribute("cake", "1");

            let tileList = [[row, column + 1, "cake_top_right", "2"], [row + 1, column, "cake_bottom_left", "3"], [row + 1, column + 1, "cake_bottom_right", "4"]];

            tileList.forEach(function (info) {
                try {
                    let otherObject = level.children[info[0]].children[info[1]];
                    let otherImage = otherObject.querySelector("img.normal");

                    isCake = otherObject.getAttribute("cake");
                    if (isCake !== undefined && isCake !== "") {
                        removeCake(otherObject);
                    }

                    otherImage.src = elementsFolder + info[2] + ".png";
                    otherImage.setAttribute("class", "normal default stretch");
                    otherObject.setAttribute("normal", state.selectedElement);
                    otherObject.setAttribute("sugarcoat", "");
                    otherObject.querySelector("img.sugarcoat").src = "";
                    otherObject.setAttribute("color", "");
                    otherObject.setAttribute("cake", info[3]);
                    if (otherObject.getAttribute("tile") === "000") {
                        otherObject.setAttribute("tile", "001");
                        otherObject.querySelector("img.tile").src = elementsFolder + "grid.png";
                    }
                } catch { }
            });
        }
        else if (state.selectedElement == "036") {
            try {
                let prevElm = document.querySelector(".frog");
                prevElm.classList.remove("frog");

                if (prevElm.getAttribute("normal") === "036" || prevElm.getAttribute("normal") === "053") {
                    resetTileAttributes(prevElm);
                }
            } catch { }

            let colorName = elements_ids[state.selectedColor];
            let elementName = "";
            let name = "";

            if (state.selectedColor === "002" && state.selectedElement === "002") {
                name = "random";
            }
            else if (state.selectedColor !== "002" && state.selectedElement === "002") {
                name = colorName;
            }
            else {
                elementName = elements_ids[state.selectedElement] + "_";
                name = elementName + colorName;
            }

            object.setAttribute(state.elementLayer, state.selectedElement);
            object.classList.add("frog");
            image.src = elementsFolder + name + ".png";
        }
        else if (state.selectedElement == "053") {
            try {
                let prevElm = document.querySelector(".frog");
                prevElm.classList.remove("frog");

                if (prevElm.getAttribute("normal") === "036" || prevElm.getAttribute("normal") === "053") {
                    resetTileAttributes(prevElm);
                }
            } catch { }

            object.classList.add("frog");
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
            object.setAttribute("normal", state.selectedElement);
            object.setAttribute("color", "");
        }
        else if (state.elementLayer == "candy_cannon" && state.selectedElement != "005") {
            let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]');

            if (!cannonElements.includes(state.selectedElement)) {
                if (!cannonElements.includes("005")) {
                    cannonElements.push("005");
                }

                cannonElements.push(state.selectedElement);

                object.setAttribute("candy_cannon", JSON.stringify(cannonElements));

                let ammocontainer = object.querySelector(".ammocontainer");

                Array.from(ammocontainer.children).forEach(function (element) {
                    if (!cannonElements.includes(element.getAttribute("element"))) {
                        element.remove();
                    }
                });

                ammoimage = ammocontainer.appendChild(document.createElement("img"));

                ammoimage.setAttribute("element", state.selectedElement);

                ammoimage.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
            }
        }
        else if (state.selectedElement == "026") {
            let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]');

            if (!cannonElements.includes("005")) {
                cannonElements.push("005");
            }

            object.setAttribute("candy_cannon", JSON.stringify(cannonElements));

            object.setAttribute(state.elementLayer, state.selectedElement);
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
        }
        else if (state.selectedElement == "005") {
            let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]');

            if (!cannonElements.includes("005")) {
                cannonElements.push("005");
            }

            let ammocontainer = object.querySelector(".ammocontainer");

            Array.from(ammocontainer.children).forEach(function (element) {
                if (!cannonElements.includes(element.getAttribute("element"))) {
                    element.remove();
                }
            });

            object.setAttribute("candy_cannon", JSON.stringify(cannonElements));
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
        }
        else if (state.elementLayer == "normal") {
            image = object.querySelector(".normal");
            if (state.selectedElement in constants.coloredCandy) {
                let colorName = elements_ids[state.selectedColor];
                let elementName = "";
                let name = "";

                if (state.selectedColor === "002" && state.selectedElement === "002") {
                    name = "random";
                }
                else if (state.selectedColor !== "002" && state.selectedElement === "002") {
                    name = colorName;
                }
                else {
                    elementName = elements_ids[state.selectedElement] + "_";
                    name = elementName + colorName;
                }

                image.src = elementsFolder + name + ".png";
                object.setAttribute("normal", state.selectedElement);
                object.setAttribute("color", state.selectedColor);
            }
            else {
                image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
                object.setAttribute("normal", state.selectedElement);
                object.setAttribute("color", "");
            }
        } else if (state.elementLayer == 'portal_entrance' || state.elementLayer == 'portal_exit') {
            object.setAttribute(state.elementLayer, state.selectedElement);
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";

            if (state.selectedElement == '990') {
                updateSelection(false, 'portal_exit', 'portal_exit');
            } else if (state.selectedElement == '014') {
                updateSelection(false, 'portal_exit_hidden', 'portal_exit');
            } else if (state.selectedElement == '991') {
                state.isPortalTimeout = true;
                updateSelection(false, 'portal_entrance', 'portal_entrance');
            } else if (state.selectedElement == '015') {
                state.isPortalTimeout = true;
                updateSelection(false, 'portal_entrance_hidden', 'portal_entrance');
            }
        } else {
            object.setAttribute(state.elementLayer, state.selectedElement);
            image.src = elementsFolder + elements_ids[state.selectedElement] + ".png";
        }

        if (small.includes(state.selectedElement)) {
            if (!image.classList.contains("small")) {
                image.classList.add("small");
            }
        }
        else {
            try {
                image.classList.remove("small");
            } catch { }
        }

        if (stretched.includes(state.selectedElement)) {
            if (!image.classList.contains("stretched")) {
                image.classList.add("stretched");
            }
        }
        else {
            try {
                image.classList.remove("stretched");
            } catch { }
        }

        if (!(object.getAttribute("normal") in constants.coloredCandy) && !(sugarCoatable.includes(object.getAttribute("normal")))) {
            object.setAttribute("sugarcoat", "");
            object.querySelector(".sugarcoat").src = elementsFolder + "none.png";
        }
    } catch (err) {
        console.error("Error occurred:", err);
    }
}

/**
 * Updates the selected tile with the given element and layer.
 * @param {HTMLElement} object - The tile element to update.
 * @param {string} element - The element ID to set.
 * @param {string} layer - The layer to update.
 */
function updateSelection(object, element, layer) {
    if (object) {
        try {
            document.querySelector(".elementselected").classList.remove("elementselected");
        }
        catch { }
        object.classList.add("elementselected");
    }
    state.selectedElement = elements_names[element];
    state.elementLayer = layer;
    if (state.lastPortalObject && layer !== 'portal_exit' && layer !== 'portal_entrance') {
        removePortal(state.lastPortalObject);
    }
}

function updateElmState(object) {
    if (object.getAttribute("normal") in constants.coloredCandy) {
        colorId = object.getAttribute("color");
        objectId = object.getAttribute("normal");

        if (colorId === "002") {
            colorId = "055";
        }
        else if (colorId === "055") {
            colorId = "056";
        }
        else if (colorId === "056") {
            colorId = "057";
        }
        else if (colorId === "057") {
            colorId = "058";
        }
        else if (colorId === "058") {
            colorId = "059";
        }
        else if (colorId === "059") {
            colorId = "060";
        }
        else if (colorId === "060") {
            colorId = "002";
        }

        object.setAttribute("color", colorId);

        let colorName = elements_ids[colorId];
        let elementName = "";
        let name = "";

        if (colorId === "002" && objectId === "002") {
            name = "random";
        }
        else if (colorId !== "002" && objectId === "002") {
            name = colorName;
        }
        else {
            elementName = elements_ids[objectId] + "_";
            name = elementName + colorName;
        }
        object.querySelector(".normal").src = elementsFolder + name + ".png";
    }
}

function resetTileAttributes(object) {
    object.setAttribute("normal", "002");
    object.setAttribute("color", "002");
    object.querySelector(".normal").src = elementsFolder + "random.png";
    object.querySelector(".normal").setAttribute("class", "normal default small");
}

function importLevel(levelData) {
    let originalLevel = document.getElementById("level");
    let levelParent = originalLevel.parentElement;
    originalLevel.id = "levelold";
    originalLevel.style.display = "none";

    let origColor = state.selectedColor;
    let origLayer = state.elementLayer;
    let origElement = state.selectedElement;

    let newLevel = levelParent.appendChild(document.createElement("table"));
    newLevel.id = "level";
    newLevel.setAttribute("cellspacing", "0");
    createNewTable(true);

    levelArray = levelData['tileMap'];

    try {
        let levelObject = newLevel;
        for (const row of levelObject.childNodes) {
            for (const object of row.childNodes) {
                try {
                    textObject = levelArray[Number(object.getAttribute("pos-row"))][Number(object.getAttribute("pos-col"))].match(/.{1,3}/g);
                }
                catch {
                    throw "This level has a grid bigger than 9x9";
                }

                textObject.forEach(function (objectId, index) {
                    if (objectId in constants.colors) {
                        color = objectId;
                        if (objectId != "002")
                            textObject.splice(index, 1);
                    }
                });

                textObject.forEach(function (objectId) {
                    if (objectId.length !== 3) {
                        throw "An object ID is not 3 characters long.";
                    }

                    if (objectId == "002" && object.getAttribute("normal") != undefined) {
                        return;
                    }

                    if (objectId == "035") {
                        if (blacklistedCake.includes(String(object.getAttribute("pos-row")) + String(object.getAttribute("pos-col")))) {
                            return;
                        }
                        else {
                            if (Number(object.getAttribute("pos-col")) == 8 || Number(object.getAttribute("pos-row")) == 8) {
                                return;
                            }
                            else {
                                blacklistedCake.push(String(object.getAttribute("pos-row")) + String(Number(object.getAttribute("pos-col")) + 1));
                                blacklistedCake.push(String(Number(object.getAttribute("pos-row"))) + String(object.getAttribute("pos-col")));
                                blacklistedCake.push(String(Number(object.getAttribute("pos-row"))) + String(Number(object.getAttribute("pos-col")) + 1));
                            }
                        }
                    }

                    let layer = getLayerFromId(objectId);
                    state.selectedColor = color;
                    state.elementLayer = layer;
                    state.selectedElement = objectId;

                    try {
                        updateTile(object);
                    }
                    catch {
                        state.elementLayer = "tile";
                        state.selectedElement = "none";
                    }
                });
            }
        }
        if (levelData.portals) {
            for (let portal of levelData.portals) {
                state.elementLayer = 'portal_entrance';
                if (portal[0][2] == 14) {
                    state.selectedElement = '990';
                } else {
                    state.selectedElement = '014';
                }

                try {
                    updateTile([].slice.call(levelObject.children[portal[0][1]].children)[portal[0][0]]);
                    state.isPortalTimeout = false;
                }
                catch (err) {
                    console.warn(err);
                    state.elementLayer = "tile";
                    state.selectedElement = "none";
                }

                state.elementLayer = 'portal_exit';
                if (portal[1][2] == 14) {
                    state.selectedElement = '991';
                } else {
                    state.selectedElement = '015';
                }

                try {
                    updateTile([].slice.call(levelObject.children[portal[1][1]].children)[portal[1][0]]);
                    state.isPortalTimeout = false;
                }
                catch (err) {
                    console.warn(err);
                    state.elementLayer = "tile";
                    state.selectedElement = "none";
                }
            }
        }

        originalLevel.remove();
        newLevel.style.display = "block";
    }
    catch (err) {
        console.error("Error occurred:", err);
        newLevel.remove();
        originalLevel.id = "level";
        originalLevel.style.display = "block";
        throw (err);
    }

    let wantedMode = levelData['gameModeName'];
    let wantedModeInput = document.getElementById("modeselection").querySelector('input[value="' + String(wantedMode) + '"]');
    if (wantedModeInput != null) {
        wantedModeInput.click();
    }

    document.getElementById("moves").value = levelData.moveLimit || "";
    document.getElementById("time").value = levelData.timeLimit || "";
    document.getElementById("frogStomachSize").value = levelData.frogStomachSize || "";

    let colorspref = document.getElementById("colorspref-section");
    state.preferredColors = levelData.preferredColors || [0, 1, 2, 3, 4];
    for (let i = 0; i < 6; i++) {
        let prefbutton = colorspref.querySelector('button[value="' + String(i) + '"]');
        if (state.preferredColors.includes(i)) {
            if (!prefbutton.classList.contains("preferredselected")) {
                prefbutton.classList.add("preferredselected");
            }
        }
        else {
            if (prefbutton.classList.contains("preferredselected")) {
                prefbutton.classList.remove("preferredselected");
            }
        }
    }

    let requirementsContainer = document.getElementById("requirements");

    Array.from(requirementsContainer.children).forEach(function (child) {
        child.remove();
    });

    try {
        document.getElementById("enablesugardrops").checked = levelData.enableSugarTrack || true;
    }
    catch {
        document.getElementById("enablesugardrops").checked = true;
    }

    let scoreTargets = levelData.scoreTargets || [];
    document.getElementById("star1").value = scoreTargets[0] || '';
    document.getElementById("star2").value = scoreTargets[1] || '';
    document.getElementById("star3").value = scoreTargets[2] || '';

    let ingredientOrder = { 0: "hazelnut", 1: "cherry", 2: "butter", 3: "liquorice_root", 4: "almond" };
    if (wantedMode.includes('Drop down') || wantedMode.includes('Drop Down') || wantedMode.includes('Super Mix') || wantedMode.includes('Order Drop') || wantedMode.includes('Jelly Color Drop')) {
        (levelData.ingredients || []).forEach(function (quantity, index) {
            try {
                if (quantity == 0) {
                    return;
                }
                let item = ingredientOrder[index];

                addRequirement(true, true, true);

                let requirementNode = requirementsContainer.children[0];
                let selectNode = requirementNode.querySelector("select");
                selectNode.value = item;
                switchedRequirementIngredient(selectNode);

                requirementNode.querySelector("input").value = quantity;
            } catch { }
        });
    }
    if (wantedMode.includes('Order') || wantedMode.includes('Super Mix') || wantedMode.includes('Jelly Color Order')) {
        (levelData._itemsToOrder || []).forEach(function (itemDict) {
            try {
                let item = itemDict['item'];
                let quantity = itemDict['quantity'];

                addRequirement(false, true);

                let requirementNode = requirementsContainer.children[0];
                let selectNode = requirementNode.querySelector("select");
                selectNode.value = item;
                switchedRequirement(selectNode);

                requirementNode.querySelector("input").value = quantity;
            } catch { }
        });
    }

    let mixerElementsContainer = document.getElementById("mixeroptions");

    Array.from(mixerElementsContainer.children).forEach(function (child) {
        child.remove();
    });

    (levelData.evilSpawnerElements || []).forEach(function (item) {
        try {

            addMixerOption();

            let requirementNode = mixerElementsContainer.children[0];
            let selectNode = requirementNode.querySelector("select");
            selectNode.value = item;
            switchedMixerOption(selectNode);
        } catch { }
    });

    cannonCodes.forEach(function (nameArray) {
        let elm = nameArray[0];

        let cannonSettingAddons = ["Max", "Spawn"];

        cannonSettingAddons.push(nameArray[1]);

        cannonSettingAddons.forEach(function (setting) {
            let inputElement = document.getElementById(elm + setting);

            if (inputElement != null) {
                inputElement.value = levelData[elm + setting] || "";
            }
        });
    });

    state.selectedColor = origColor;
    state.elementLayer = origLayer;
    state.selectedElement = origElement;

    document.getElementById('isOwlModeEnabled').checked = levelData.isOwlModeEnabled;
    document.getElementById("dreamworldoptions").style.display = levelData.isOwlModeEnabled ? "block" : "none";
    document.getElementById("initialMovesUntilMoonStruck").value = levelData.initialMovesUntilMoonStruck || '';
    document.getElementById("initialMovesDuringMoonStruck").value = levelData.initialMovesDuringMoonStruck || '';
    document.getElementById('maxAllowedScaleDiff').value = levelData.maxAllowedScaleDiff || '';

    state.lastPortalObject = undefined;
}

function displayImportLevelUI() {
    document.getElementById("importmenu").style.display = "block";
}

function importLevelUI() {
    try {
        let importField = document.getElementById("importfield");
        importLevel(JSON.parse(importField.value));
        document.getElementById("importerror").style.display = "none";
        importField.value = "";
        document.getElementById("importmenu").style.display = "none";
    }
    catch (err) {
        let errorPara = document.getElementById("importerror");
        errorPara.style.display = "block";
        errorPara.innerHTML = err;
    }
}

function exportLevel() {
    let levelArray = [];
    let levelObject = document.getElementById("level");
    let level = {};
    level['portals'] = [];
    if (currentMode.includes("Rainbow Rapids")) {
        level.rainbowRapidsTargets = 0;
    }
    for (const row of levelObject.childNodes) {
        for (const object of row.childNodes) {
            if (object.getAttribute("tile") == "000") {
                rowArray.push("000");
                continue;
            }
            let candyCannon = JSON.parse(object.getAttribute("candy_cannon") || '[]');
            if (currentMode !== "Classic" && currentMode !== "Jelly Time" && currentMode !== "Order Time" && currentMode !== "Drop Time" && currentMode !== "Jelly Color Time" && candyCannon.includes('069')) {
                for (let cannon of candyCannon) {
                    if (cannon === '069') {
                        candyCannon[i] = '069';
                    }
                }
            }
            let totalCode = [].concat(candyCannon);

            let toLoopThrough = [].concat(layers, ["color"]);

            toLoopThrough.splice(toLoopThrough.indexOf("candy_cannon"), 1);

            toLoopThrough.forEach(function (layer) {
                let element = "";
                if (object.hasAttribute(layer)) {
                    element = object.getAttribute(layer);
                }
                else {
                    return;
                }

                if (currentMode.includes("Rainbow Rapids") && element == "156") {
                    level.rainbowRapidsTargets++;
                }

                if (currentMode !== "Classic" && currentMode !== "Jelly Time" && currentMode !== "Order Time" && currentMode !== "Drop Time" && currentMode !== "Jelly Color Time") {
                    if (element === '050') {
                        element = '084';
                    }
                }

                if (element == "991" || element == "015") {
                }

                if (element == "990" || element == "014") {
                    let row2 = parseInt(object.getAttribute('portalexitrow'));
                    let col2 = parseInt(object.getAttribute('portalexitcol'));
                    let portal = [[Number(object.getAttribute("pos-col")), levelArray.length], [col2, row2]];
                    if (element == '990') {
                        portal[0][2] = 14;
                        portal[1][2] = 14;
                    }
                    level.portals.push(portal);
                }

                if (!totalCode.includes(element) && element != "") {
                    totalCode.push(element);
                }
            });

            if (object.getAttribute("normal") !== "002" && object.getAttribute("color") == "002") {
                totalCode.splice(totalCode.indexOf("002"), 1);
            }

            if (totalCode.includes("001") && totalCode.length != 1) {
                totalCode.splice(totalCode.indexOf("001"), 1);
            }

            rowArray.push(totalCode.join(""));
        }
        levelArray.push(rowArray);
    }
    level['tileMap'] = levelArray;
    level['numberOfColours'] = state.preferredColors.length;
    level['enableSugarTrack'] = document.getElementById("enablesugardrops").checked;
    level['preferredColors'] = state.preferredColors;

    level['colorWeightAdjustments'] = [0];

    let star1 = Number(document.getElementById("star1").value) || 1000;
    let star2 = Number(document.getElementById("star2").value) || 2000;
    let star3 = Number(document.getElementById("star3").value) || 3000;

    level['scoreTargets'] = [star1, star2, star3];

    level['protocolVersion'] = "0.3";
    level['randomSeed'] = 0;

    level['gates'] = [];
    level['orlocks'] = [];
    level['skulls'] = [];

    if (currentMode === "Classic" || currentMode === "Jelly Time" || currentMode === "Order Time" || currentMode === "Drop Time" || currentMode === "Jelly Color Time") {
        let time = document.getElementById("time").value;
        if (time === '') {
            time = 30;
        }
        else {
            time = Number(time);
        }
        level['timeLimit'] = time;
    }
    else {
        let moves = document.getElementById("moves").value;
        if (moves === '') {
            moves = 15;
        }
        else {
            moves = Number(moves);
        }

        level['moveLimit'] = moves;
    }
    {
        let frogstomachsize = document.getElementById("frogstomachsize").value;
        if (frogstomachsize === '') {
            frogstomachsize = 13;
        }
        else {
            frogstomachsize = Number(frogstomachsize);
        }

        level['frogStomachSize'] = frogstomachsize;
    }

    if (currentMode.includes('Drop down') || currentMode.includes('Drop Down') || currentMode.includes('Super Mix') || currentMode.includes('Order Drop') || currentMode.includes('Jelly Color Drop')) {
        let hazelnuts = 0;
        let cherries = 0;
        let butters = 0;
        let liquorice_roots = 0;
        let almonds = 0;

        let requirementsContainer = document.getElementById("requirements");
        for (var i = 0; i < requirementsContainer.children.length; i++) {
            element = requirementsContainer.children[i];

            if (element.getAttribute("reqtype") !== "ingredient") {
                continue;
            }

            let item = element.querySelector("select").value;

            let quantity = element.querySelector("input").value;
            if (quantity === '') {
                quantity = 0;
            }
            else {
                quantity = Number(quantity);
            }

            if (item == "cherry") {
                cherries = quantity;
            }
            else if (item == "hazelnut") {
                hazelnuts = quantity;
            }
            else if (item == "butter") {
                butters = quantity;
            }
            else if (item == "liquorice_root") {
                liquorice_roots = quantity;
            }
            else if (item == "almond") {
                almonds = quantity;
            }
        }

        level.numIngredientsOnScreen = parseInt(document.getElementById('numIngredientsOnScreen').value) || 0;
        level.maxNumIngredientsOnScreen = parseInt(document.getElementById('maxNumIngredientsOnScreen').value) || 0;
        level.ingredientSpawnDensity = parseInt(document.getElementById('ingredientSpawnDensity').value) || 0;

        level['ingredients'] = [hazelnuts, cherries, butters, liquorice_roots, almonds];
    }

    if (currentMode.includes('Order') || currentMode.includes('Super Mix')) {
        let orders = [];
        let requirementsContainer = document.getElementById("requirements");
        for (var i = 0; i < requirementsContainer.children.length; i++) {
            element = requirementsContainer.children[i];

            if (element.getAttribute("reqtype") !== "order") {
                continue;
            }

            let item = Number(element.querySelector("select").value);

            let quantity = element.querySelector("input").value;
            if (quantity === '') {
                quantity = 0;
            }
            else {
                quantity = Number(quantity);
            }

            orders.push({ "item": item, "quantity": quantity });
        }

        level['_itemsToOrder'] = orders;
    }

    level['gameModeName'] = currentMode;

    level['episodeId'] = 0;

    level["evilSpawnerAmount"] = parseInt(document.getElementById('evilSpawnerAmount').value) || 3;

    let magicMixerElements = [];
    let mixerElementsContainer = document.getElementById("mixeroptions");
    for (var i = 0; i < mixerElementsContainer.children.length; i++) {
        element = mixerElementsContainer.children[i];

        let item = Number(element.querySelector("select").value);

        magicMixerElements.push(item);
    }

    level["evilSpawnerElements"] = magicMixerElements;
    level["evilSpawnerInterval"] = parseInt(document.getElementById('evilSpawnerInterval').value) || 3;

    cannonCodes.forEach(function (nameArray) {
        let elm = nameArray[0];

        let cannonSettingAddons = ["Max", "Spawn", ""];

        cannonSettingAddons.push(nameArray[1]);

        cannonSettingAddons.forEach(function (setting) {
            let inputElement = document.getElementById(elm + setting);
            if (inputElement != null && inputElement.value != "") {
                level[elm + setting] = Number(inputElement.value) || 0;
            }
        });
    });

    if (document.getElementById("isOwlModeEnabled").checked) {
        level.isOwlModeEnabled = true;
        level.initialMovesUntilMoonStruck = parseInt(document.getElementById("initialMovesUntilMoonStruck").value) || 5;
        level.initialMovesDuringMoonStruck = parseInt(document.getElementById("initialMovesDuringMoonStruck").value) || 3;
        level.maxAllowedScaleDiff = parseInt(document.getElementById('maxAllowedScaleDiff').value) || 10;
        level.leftWeightToTriggerMoonStruck = 0;
        level.rightWeightToTriggerMoonStruck = 0;
        level.totalWeightToTriggerMoonStruck = 0;
        level.useSplitWeightConditionToTriggerMoonStruck = false;
        level.useTotalWeightConditionToTriggerMoonstruck = false;
    }
    return level;
}

function exportLevelUI() {
    let level = exportLevel();
    document.getElementById("exportfield").value = JSON.stringify(level);
    document.getElementById("exportmenu").style.display = "block";
}

function resized() {
    let container = document.getElementById("level");
    let width = window.innerWidth * .00078;
    let height = window.innerHeight * .00078;

    document.documentElement.style.setProperty("--scaleWidth", width);
    document.documentElement.style.setProperty("--scaleHieght", height);
}

window.onresize = function () {
    resized();
}

resized();

function createNewTable(clear = false) {
    var levelTable = document.getElementById('level');
    levelTable.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        var row = document.createElement("tr");
        levelTable.appendChild(row);
        for (let g = 0; g < 9; g++) {
            var object = document.createElement("td");
            object.setAttribute("style", "position: relative; left: 0; top: 0;");

            object.setAttribute("pos-row", i);
            object.setAttribute("pos-col", g);

            object.setAttribute("candy_cannon", '');

            object.addEventListener('contextmenu', function (ev) {
                ev.preventDefault();
                let object = ev.target;
                if (object.nodeType != "td") {
                    object = object.parentNode;
                }
                updateElmState(object);
            }, false);

            object.onmouseover = function (event) {
                event.preventDefault();
                this.classList.add("selected");
                if (isDown) {
                    updateTile(this);
                }
            }

            object.onmousedown = function (event) {
                event.preventDefault();
                if (event.button === 0) {
                    event.preventDefault();
                    isDown = true;
                    updateTile(this);

                }
            }
            object.onmouseout = function (event) {
                event.preventDefault();
                try {
                    this.classList.remove("selected");
                }
                catch { }
            }

            if (!clear) {
                object.setAttribute('normal', "002");
                object.setAttribute('color', "002");
            }
            object.setAttribute('tile', "001");

            let ammo = object.appendChild(document.createElement("div"));
            ammo.classList.add("ammocontainer");

            layers.forEach(function (layer) {
                let image = document.createElement("img");
                image.setAttribute('draggable', false);
                image.classList.add(layer);
                image.classList.add("default");
                object.appendChild(image);
            });

            image = object.querySelector(".tile");
            image.src = 'elements/grid.png';
            image.classList.remove("default");

            if (!clear) {
                if (i === 0) {
                    image = object.querySelector(".candy_entrance");
                    image.src = elementsFolder + "candy_entrance.png";
                    object.setAttribute("candy_entrance", "026");
                    object.setAttribute("candy_cannon", '["005"]');
                }

                image = object.querySelector(".normal");
                image.src = elementsFolder + elements_ids["002"] + ".png";
                image.classList.add("small");
            }

            image = object.querySelector(".selectimg");
            image.src = elementsFolder + "select.png";
            image.style.display = "none";

            row.appendChild(object);
        }
    }
}

createNewTable();

document.addEventListener('mouseup', function () {
    isDown = false;
    state.isPortalTimeout = false;
}, true);

document.querySelectorAll(".selectcolor").forEach(function (element) {
    let color = element.getAttribute("color");
    let parent = element.parentElement;

    let button = createButtonWithImage(elementsFolder + color + ".png", function () {
        updateColor(this, color);
    });

    element.remove();
    parent.appendChild(button);
});

document.querySelectorAll(".selectcoloredelement").forEach(function (element) {
    let elementName = element.getAttribute('element');
    let parent = element.parentElement;

    let button = createButtonWithImage(elementsFolder + elementName + "_random.png", function () {
        updateSelection(this, elementName, 'normal');
    });

    element.remove();
    parent.appendChild(button);
});

document.querySelectorAll(".selectelement").forEach((element) => {
    initializeElement(element, "selectelement", {
        imageSrc: elementsFolder + element.getAttribute("element") + ".png",
        elementName: element.getAttribute("element"),
        layer: element.getAttribute("gamelayer")
    });
});

document.querySelectorAll(".cannonpref").forEach(function (element) {
    let elm = element.getAttribute("elm");
    let imageSrc = element.getAttribute("image");
    let tick = element.getAttribute("tick");

    element.innerHTML = '<td> <img class="elmimg" style="max-width: 70%;"> </td> <td> <input class="max" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td> <td> <input class="spawn" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td> <td> <input class="tick" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td>';

    element.querySelector(".elmimg").src = imageSrc;
    element.querySelector(".max").id = elm + "Max";
    element.querySelector(".spawn").id = elm + "Spawn";
    if (tick != "") {
        element.querySelector(".tick").id = elm + tick;
    }
    else {
        element.querySelector(".tick").style.display = "none";
    }
});

const levelElement = document.getElementById("level");
const requirementsContainer = document.getElementById("requirements");

function createButtonWithImage(imageSrc, onClickHandler) {
    const button = document.createElement("button");
    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("selectionimage");
    button.appendChild(image);
    button.addEventListener("click", onClickHandler);
    return button;
}

function initializeElement(element, type, attributes) {
    const button = document.createElement("button");
    const image = document.createElement("img");
    image.src = attributes.imageSrc;
    image.classList.add("selectionimage");
    button.appendChild(image);
    button.addEventListener("click", () => updateSelection(button, attributes.elementName, attributes.layer));
    element.replaceWith(button);
}