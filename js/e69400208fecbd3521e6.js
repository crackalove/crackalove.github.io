"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/app/components/Path.js"
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    const name =\n        window.location.hash.replace(\"#\", \"\") ||\n        window.location.pathname.replace(\"/\", \"\") ||\n        \"home\";\n\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">#${name}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?\n}");

/***/ },

/***/ "./src/app/components/Project.js"
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    return Object.entries(links)\n        .map(([name, value]) => {\n            let href = value;\n\n            if (!value.startsWith(\"http\")) {\n                if (name === \"telegram\") {\n                    href = `https://t.me/${value}`;\n                } else if (name === \"github\") {\n                    href = `https://github.com/${value}`;\n                }\n            }\n\n            const label = name[0].toUpperCase() + name.slice(1);\n            return `<a href=\"${href}\" class=\"button\">${label} =></a>`;\n        })\n        .join(\"\");\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const project = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(p => p.id === id);\n    if (!project) return \"\";\n\n    const { hasImage, techs: projectTech, links } = project;\n\n\n    return /*html*/ `\n        <div class=\"project\">\n            ${\n                hasImage\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n                    : \"\"\n            }\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n                    .map(\n                        (tech) =>\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\n                    )\n                    .join(\"\")}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?\n}");

/***/ },

/***/ "./src/app/components/ProjectList.js"
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?\n}");

/***/ },

/***/ "./src/app/consts/projects.js"
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n    {\n        id: \"rechamo\",\n        name: \"ReChamo\",\n        description: \"Reverse engineering and cybersecurity research hub\",\n        links: {\n            telegram: \"https://t.me/ReChamo\"\n        },\n        techs: [\"reverse\", \"malware\", \"infosec\"],\n        hasImage: false,\n    }\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?\n}");

/***/ },

/***/ "./src/app/consts/techs.js"
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    ts: \"TypeScript\",\n    cpp: \"C++\",\n    assembly: \"Assembly\",\n    elf: \"ELF\",\n    pe: \"PE\",\n    ida: \"IDA Pro\",\n    x64dbg: \"x64dbg\",\n    httpDebugger: \"HTTPDebugger Pro\",\n    procmon: \"Process Monitor\",\n    burp: \"Burp Suite Professional\",\n    js: \"JavaScript\",\n    python: \"Python\",\n    sqlite: \"SQLite\",\n    mongo: \"MongoDB\",\n    postgreSql: \"PostgreSQL\",\n    html: \"HTML\",\n    css: \"CSS\",\n    sass: \"SASS\",\n    scss: \"SCSS\",\n    less: \"Less\",\n    stylus: \"Stylus\",\n    ejs: \"EJS\",\n    jinja: \"Jinja2\",\n    node: \"Node.js\",\n    vscode: \"VSCode\",\n    nvim: \"NeoVim\",\n    figma: \"Figma\",\n    git: \"Git & GitHub\",\n    xfce: \"XFCE\",\n    react: \"React\",\n    discordJs: \"Discord.js\",\n    flask: \"Flask\",\n    quart: \"Quart\",\n    express: \"Express\",\n    rtk: \"RTK\",\n    zod: \"Zod\",\n    webpack: \"WebPack\",\n    pug: \"Pug\",\n    gulp: \"Gulp\",\n    next: \"Next\",\n    deno: \"Deno\",\n    pixijs: \"PixiJS\",\n    preact: \"Preact\",\n    reverse: \"reverse\",\n    malware: \"malware\",\n    infosec: \"infosec\",\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?\n}");

/***/ },

/***/ "./src/app/consts/websites.js"
/*!************************************!*\
  !*** ./src/app/consts/websites.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    discord: \"discord.com/users/\",\n    github: \"github.com/\",\n    figma: \"figma.com/@\",\n    replit: \"replit.com/@\",\n    stackOverflow: \"stackoverflow.com/users/\",\n    codewars: \"codewars.com/users/\",\n    devTo: \"dev.to/\",\n    cssBattle: \"cssbattle.dev/player/\",\n    codepen: \"codepen.io/\",\n    dribble: \"dribbble.com/\",\n    email: \"mailto:\"\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/websites.js?\n}");

/***/ },

/***/ "./src/app/views/Projects.js"
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?\n}");

/***/ },

/***/ "./src/assets/styles/pages/projects.sass"
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?\n}");

/***/ }

}]);