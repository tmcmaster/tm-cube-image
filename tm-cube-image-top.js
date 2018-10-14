import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {TmCubeImageBehavior} from './tm-cube-image-behaviour.js';
import * as d3 from "d3";

const SQUARE_SIZE = 0.37037037037;

const EDGE_MAP = {
    1: [20,9,0],
    2: [10,1],
    3: [11,12,2],
    4: [19,3],
    5: [],
    6: [13,5],
    7: [17,18,6],
    8: [16,7],
    9: [14,15,8]
};

// Deprecated
const J_PERM_RIGHT = '11>14,12>15 | 15>12,14>11 | 13>16 | 16>13';

/**
 * `tm-cube-image-top`
 * Polymer web component for generating cube images
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TmCubeImageTop extends mixinBehaviors([TmCubeImageBehavior], PolymerElement) {
    constructor() {
        super();
        this.baseSize = 136;
        this.baseScale = 0.25
    }
    static get template() {
        return html`
      <style>
        :host {
          display: inline-block;
          box-sizing: border-box;
          //border: solid blue 1px;
          width: 150px;
          height: 150px;
        }
        
        svg {
            box-sizing: border-box;
            //border: solid red 1px;
            width: 100%;
            height: 100%;
        }
        
       </style>
            
        <svg version='1.1' id="svg"
            viewBox='-0.9 -0.9 1.8 1.8'>
            
              <defs>
                <marker id="arrow" markerWidth="3" markerHeight="3" refX="1.8" refY="1.5" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,3 L3,1.5 z" fill="#f00" />
                </marker>
              </defs>
              
            <g id="aaa"  transform="scale(1) " id="topface">
                <!-- Border -->
                <g style='stroke-width:0.1;stroke-linejoin:round;opacity:1'>
                    <polygon fill='#000000' stroke='#000000' points='-0.522222222222,-0.522222222222 0.522222222222,-0.522222222222 0.522222222222,0.522222222222 -0.522222222222,0.522222222222'/>
                </g>
                <!-- Background -->
                <g style='opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round'>
                    <polygon fill$="[[_getColor(colors,0)]]" stroke='#000000'  points='-0.527777777778,-0.527777777778 -0.212962962963,-0.527777777778 -0.212962962963,-0.212962962963 -0.527777777778,-0.212962962963'/>
                    <polygon fill$="[[_getColor(colors,1)]]" stroke='#000000'  points='-0.157407407407,-0.527777777778 0.157407407407,-0.527777777778 0.157407407407,-0.212962962963 -0.157407407407,-0.212962962963'/>
                    <polygon fill$="[[_getColor(colors,2)]]" stroke='#000000'  points='0.212962962963,-0.527777777778 0.527777777778,-0.527777777778 0.527777777778,-0.212962962963 0.212962962963,-0.212962962963'/>
                    <polygon fill$="[[_getColor(colors,3)]]" stroke='#000000'  points='-0.527777777778,-0.157407407407 -0.212962962963,-0.157407407407 -0.212962962963,0.157407407407 -0.527777777778,0.157407407407'/>
                    <polygon fill$="[[_getColor(colors,4)]]" stroke='#000000'  points='-0.157407407407,-0.157407407407 0.157407407407,-0.157407407407 0.157407407407,0.157407407407 -0.157407407407,0.157407407407'/>
                    <polygon fill$="[[_getColor(colors,5)]]" stroke='#000000'  points='0.212962962963,-0.157407407407 0.527777777778,-0.157407407407 0.527777777778,0.157407407407 0.212962962963,0.157407407407'/>
                    <polygon fill$="[[_getColor(colors,6)]]" stroke='#000000'  points='-0.527777777778,0.212962962963 -0.212962962963,0.212962962963 -0.212962962963,0.527777777778 -0.527777777778,0.527777777778'/>
                    <polygon fill$="[[_getColor(colors,7)]]" stroke='#000000'  points='-0.157407407407,0.212962962963 0.157407407407,0.212962962963 0.157407407407,0.527777777778 -0.157407407407,0.527777777778'/>
                    <polygon fill$="[[_getColor(colors,8)]]" stroke='#000000'  points='0.212962962963,0.212962962963 0.527777777778,0.212962962963 0.527777777778,0.527777777778 0.212962962963,0.527777777778'/>
                </g>
                <!-- Edges --> 
                <g style='opacity:1;stroke-opacity:1;stroke-width:0.02;stroke-linejoin:round'>
                    <polygon fill$="[[_getColor(colors,17)]]" stroke='#000000'  points='-0.544061302682,0.554406130268 -0.195913154534,0.554406130268 -0.183908045977,0.718390804598 -0.508045977011,0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,16)]]" stroke='#000000'  points='-0.174457215837,0.554406130268 0.173690932312,0.554406130268 0.161685823755,0.718390804598 -0.16245210728,0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,15)]]" stroke='#000000'  points='0.195146871009,0.554406130268 0.543295019157,0.554406130268 0.507279693487,0.718390804598 0.183141762452,0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,20)]]" stroke='#000000'  points='-0.554406130268,-0.544061302682 -0.554406130268,-0.195913154534 -0.718390804598,-0.183908045977 -0.718390804598,-0.508045977011'/>
                    <polygon fill$="[[_getColor(colors,19)]]" stroke='#000000'  points='-0.554406130268,-0.174457215837 -0.554406130268,0.173690932312 -0.718390804598,0.161685823755 -0.718390804598,-0.16245210728'/>
                    <polygon fill$="[[_getColor(colors,18)]]" stroke='#000000'  points='-0.554406130268,0.195146871009 -0.554406130268,0.543295019157 -0.718390804598,0.507279693487 -0.718390804598,0.183141762452'/>
                    <polygon fill$="[[_getColor(colors,11)]]" stroke='#000000'  points='0.544061302682,-0.554406130268 0.195913154534,-0.554406130268 0.183908045977,-0.718390804598 0.508045977011,-0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,10)]]" stroke='#000000'  points='0.174457215837,-0.554406130268 -0.173690932312,-0.554406130268 -0.161685823755,-0.718390804598 0.16245210728,-0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,9)]]" stroke='#000000'  points='-0.195146871009,-0.554406130268 -0.543295019157,-0.554406130268 -0.507279693487,-0.718390804598 -0.183141762452,-0.718390804598'/>
                    <polygon fill$="[[_getColor(colors,14)]]" stroke='#000000'  points='0.554406130268,0.544061302682 0.554406130268,0.195913154534 0.718390804598,0.183908045977 0.718390804598,0.508045977011'/>
                    <polygon fill$="[[_getColor(colors,13)]]" stroke='#000000'  points='0.554406130268,0.174457215837 0.554406130268,-0.173690932312 0.718390804598,-0.161685823755 0.718390804598,0.16245210728'/>
                    <polygon fill$="[[_getColor(colors,12)]]" stroke='#000000'  points='0.554406130268,-0.195146871009 0.554406130268,-0.543295019157 0.718390804598,-0.507279693487 0.718390804598,-0.183141762452'/>
                </g>
                <g id="arrows" style='opacity:1;stroke-opacity:1;stroke-width:0.02;stroke-linejoin:round'>
                </g>
            </g>
        </svg>
    `;
    }

    static get properties() {
        return {
            arrows: {
                type: String,
                observer: '_arrowsChanged'
            },
            flips: {
                type: String,
                observer: '_flipsChanged'
            },
            noArrows: {
                type: Boolean,
                value: false
            },
            noMove: {
                type: Boolean,
                value: false
            },
            debug: {
                type: Boolean,
                value: false
            },
            stickers: {
                type: String,
                notify: true
            }
        };
    }

    _tap(e) {
        if (e.shiftKey) {
            this.rotateLeft();
        } else if (e.metaKey) {
            this.rotateRight();
        } else {
            this.move();
        }

        const arrows = this.arrows;
        const flips = this.flips;

        this.dispatchEvent(new CustomEvent('select', {detail: {arrows: arrows, flips: flips}}));
    }

    rotateLeft() {
        this._moveWithArrows('1>7,7>9,9>3,3>1,2>4,4>8,8>6,6>2');
    }

    rotateRight() {
        this._moveWithArrows('1>3,3>9,9>7,7>1,2>6,6>8,8>4,4>2');
    }

    _flipsChanged(flips) {

    }

    _arrowsChanged(arrows) {
        if (this.noArrows) {
            return;
        }
        if (arrows === undefined || arrows === "") {
            d3.select(this.$.arrows).selectAll('line').remove();
            return;
        }

        const svg = d3.select(this.$.arrows);
        const self = this;
        this.arrows.replace(' ', '').split(',').forEach(function(arrow) {
            const points = arrow.split('>');
            self._addArrow(svg, points[0],points[1]);
        });
    }

    move() {
        if (this.noMove) {
            return;
        }
        if (this.flips !== undefined && this.flips !== '') {
            this._moveWithFlips(this.flips);
        } else if (this.arrows !== undefined && this.arrows !== '') {
            this._moveWithArrows(this.arrows);
        }
    }

    _moveWithFlips(flips) {
        if (flips === undefined || flips === "") return;

        const origColors = this.colors.map(c => c);
        const newColors = this.colors.map(c => c);
        let moves = this.flips.split('')
            .map(ch => (ch === '|' ? ',' : ch))
            .filter(ch => ch !== ' ')
            .join('')
            .split(',')
            .map(m => m.split('>'));
        moves.forEach(move => {
            newColors[move[1]] = origColors[move[0]]
        });
        this.set('colors', newColors);
    }

    _moveWithArrows(arrows) {
        if (arrows === undefined || arrows === "") return;

        let moves = arrows.split('')
            .filter(c => c !== ' ')
            .join('')
            .split(',')
            .map(m => m.split('>'));

        const origColors = this.colors.map(c => c);
        const newColors = this.colors.map(c => c);
        moves.forEach(move => {
            let from = EDGE_MAP[move[0]];
            let to = EDGE_MAP[move[1]];
            from = (Array.isArray(from) ? from : [from]);
            to = (Array.isArray(to) ? to : [to]);
            from.forEach((m,i) => {
                newColors[to[i]] = origColors[from[i]]
            });
        });
        this.set('colors', newColors);
    }

    applyMoves(movesString) {
        const moves = movesString.split('')
            .map(c => (c==='|' ? ',' : c))
            .filter(c => c !== ' ')
            .join('')
            .split(',')
            .map(m => m.split('>'));

        const origColors = this.colors.map(c => c);
        const newColors = this.colors.map(c => c);
        moves.forEach(move => newColors[move[1]] = origColors[move[0]]);
        this.set('colors', newColors);
    }

    ready() {
        super.ready();
        this._scaleImage(this.$.arrows);
        if (this.stickers === undefined || this.stickers === '') {
            this.set('stickers', 'yyy yyy yyy | rrr bbb ooo ggg');
        }

        this.$.aaa.addEventListener('click', e => this._tap(e));
    }

    _addArrow(svg, from, to) {

        const x1 = -(1-((from-1)%3))*SQUARE_SIZE;
        const y1 = -(2-(Math.ceil(from/3)))*SQUARE_SIZE
        const x2 = -(1-((to-1)%3))*SQUARE_SIZE;
        const y2 = -(2-(Math.ceil(to/3)))*SQUARE_SIZE

        svg.append("line")
            .attr("x1", x1)
            .attr("y1", y1)
            .attr("x2", x2)
            .attr("y2", y2)
            .attr("class", "arrow")
            .attr("stroke-width", 0.05)
            .attr("stroke", "RED")
            .attr("marker-end", "url(#arrow)");
    }
}


window.customElements.define('tm-cube-image-top', TmCubeImageTop);