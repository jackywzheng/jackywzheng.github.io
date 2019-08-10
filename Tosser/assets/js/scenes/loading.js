// import transitions
import {fadeOut} from './transistions.js'

/**
 * LoadingScene is presented to the user while game assets are loading
 */
export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Loading',
            pack: {
                files: [
                    {type: 'image', key: 'loading', url: 'assets/img/loading.png'},
                ]
            }
        });
    }

    /**
     * Load all game assets
     */
    preload() {
        // loading screen assets
        let background = this.add.rectangle(
            window.innerWidth * 0.5, window.innerHeight * 0.5, window.innerWidth, window.innerHeight, 0xffffff);
        let loadingText = this.add.text(window.innerWidth * 0.5, window.innerHeight * 0.38, 'Loading...', LOADING_FONT);
        loadingText.setOrigin(0.5);
        loadingText.setShadowBlur(3);
        let loadingImage = this.physics.add.image(window.innerWidth * 0.5, window.innerHeight * 0.54, 'loading');
        loadingImage.setAngularVelocity(150);

        // image assets
        this.load.image('apple', 'assets/img/apple.png');
        this.load.image('background', 'assets/img/study_area.png');
        this.load.image('background_blur', 'assets/img/study_area_blur.png');
        this.load.image('banana', 'assets/img/banana.png');
        this.load.image('discoball', 'assets/img/disco-ball.png');
        this.load.image('paper', 'assets/img/paper_ball.png');
        this.load.image('life', 'assets/img/life.png');
        this.load.image('light_off', 'assets/img/light_off.png');
        this.load.image('light_on', 'assets/img/light_on.png');
        this.load.image('logo', 'assets/img/tosser_logo.png');
        this.load.image('scoreboard', 'assets/img/scoreboard.png');
        this.load.image('plus1', 'assets/img/plus1.jpg');
        this.load.image('waterbottle', 'assets/img/water_bottle.png');
        this.load.image('wind_arrow', 'assets/img/arrow.png');
        this.load.image('good', 'assets/img/good.png');
        this.load.image('bad', 'assets/img/bad.png');
        this.load.image('journal', 'assets/img/journalwhite.png');
        this.load.image('book', 'assets/img/bookwhite.png');
        this.load.image('option', 'assets/img/options.png');
        this.load.image('options_background', 'assets/img/options_background.png');
        this.load.image('bread', 'assets/img/bread.png');
        this.load.image('cardboard', 'assets/img/cardboard.png');
        this.load.image('popcan', 'assets/img/pop_can.png');
        this.load.image('carton', 'assets/img/milk.png');

        // profile pictures
        this.load.image('bryden', 'assets/img/brydenAvatar.png');
        this.load.image('dillon', 'assets/img/dillon.png');
        this.load.image('kevin', 'assets/img/kevinAvatar.png');
        this.load.image('jacky', 'assets/img/jacky.png');
        this.load.image('jared', 'assets/img/jared.png');

        // audio assets
        this.load.audio('hit-target', [
            'assets/audio/bin-sound.m4a',
            'assets/audio/bin-sound.mp3',
        ]);
        this.load.audio('disco', 'assets/audio/ymca.mp3');
        this.load.audio('light', 'assets/audio/light.wav');
        this.load.audio('rim', 'assets/audio/rim.wav');
        this.load.audio('throw', 'assets/audio/throw.wav');
    }

    /**
     * Transition to TitleScene when all assets are loaded
     */
    create() {
        fadeOut(this, 0xFFFFFF, 500);
        this.time.delayedCall(500, function () {
            this.scene.start('Title');
        }, null, this);
    }
}