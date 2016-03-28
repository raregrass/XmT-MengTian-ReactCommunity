"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var grid_list_1 = require("material-ui/lib/grid-list/grid-list");
var grid_tile_1 = require("material-ui/lib/grid-list/grid-tile");
var star_border_1 = require("material-ui/lib/svg-icons/toggle/star-border");
var icon_button_1 = require("material-ui/lib/icon-button");
var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        _super.apply(this, arguments);
    }
    Gallery.prototype.render = function () {
        return (React.createElement("div", {style: styles.root}, React.createElement(grid_list_1.default, {cellHeight: 200, cols: 2, padding: 1, style: styles.gridList}, tilesData.map(function (tile) { return (React.createElement(grid_tile_1.default, {actionIcon: React.createElement(icon_button_1.default, null, React.createElement(star_border_1.default, {color: "white"})), actionPosition: "left", key: tile.img, title: tile.title, titlePosition: "top", titleBackground: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)", cols: tile.featured ? 2 : 1, rows: tile.featured ? 2 : 1}, React.createElement("img", {src: tile.img}))); }))));
    };
    return Gallery;
}(react_1.Component));
exports.Gallery = Gallery;
var styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: "auto",
        height: "auto",
        overflowY: 'auto',
        marginBottom: 24,
    },
    cell: {
        width: 100
    }
};
var tilesData = [
    {
        img: require("./team6.jpg"),
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        img: require("./team6.jpg"),
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: require("./team6.jpg"),
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: require("./team6.jpg"),
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: require("./team6.jpg"),
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: require("./team6.jpg"),
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: require("./team6.jpg"),
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: require("./team6.jpg"),
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];
//# sourceMappingURL=Gallery.js.map