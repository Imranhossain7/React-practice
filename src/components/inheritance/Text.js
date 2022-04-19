import Emoji from './Emoji';

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decorateText = this.addEmoji("I'm Javascript Language", '❤');
        return super.render(decorateText);
    }
}
