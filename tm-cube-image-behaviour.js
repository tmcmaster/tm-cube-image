
// const BASE_SCALE = 0.25;
// const BASE_SIZE = 136;

const COLOR_RED = '#C70039';
const COLOR_WHITE = '#FFFFFF';
const COLOR_BLUE = '#355ee5';
const COLOR_ORANGE = '#FF5733';
const COLOR_YELLOW = '#ffff25';
const COLOR_GREEN = '#2ac44b';
const COLOR_BLACK = 'darkgray';

const COLORS = {
    'r': COLOR_RED,
    'w': COLOR_WHITE,
    'b': COLOR_BLUE,
    'o': COLOR_ORANGE,
    'y': COLOR_YELLOW,
    'g': COLOR_GREEN,
    '_': COLOR_BLACK,
    '-': COLOR_BLACK
};

export const TmCubeImageBehavior = {
    properties: {
        stickers: {
            type: String,
            observer: '_stickersChanged'
        },
        colors: {
            type: Array,
            value: [],
            notify: true
        },
        scale: {
            type: Number,
            value: '1'
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        baseScale: {
            type: Number,
            value: 0.25
        },
        baseSize: {
            type: Number,
            value: 136
        }
    },
    _stickersChanged(stickers) {
        if (stickers === undefined) return;

        const newColors = stickers.split('')
            .filter(c => (c in COLORS))
            .join('')
            .padEnd(27, '.')
            .split('')
            .map(c => this._lookupColor(c));
        console.log('---- Colors: ', newColors);
        this.set('colors', newColors);
    },
    _lookupColor(ch) {
        return (ch in COLORS ? COLORS[ch] : COLOR_BLACK)
    },
    _getColor(colors, position) {
        return colors[position];
    },
    _getTransform(scale) {
        const resultingScale = this.baseScale * this.scale;
        const newX = 6 * this.scale;
        const newY = 4 * this.scale;
        return 'translate(' + newX + ',' + newY + ') scale(' + resultingScale + ')';
    },

    _scaleImage(element) {
        console.log('Cube SVG: ', element);
        var height = element.clientHeight;
        var width = element.clientWidth;
        console.log('Size: ', height, width);
        this.set('scale', (width<height ? width / this.baseSize : height / this.baseSize));
    }

}