import ParagraphModule from './ParagraphModule';
import MiseEnAvantModule from './MiseEnAvantModule';
import ExergueModule from './ExergueModule';
import HeaderModule from './HeaderModule';
import ButtonEditorialModule from './ButtonEditorialModule';
import ButtonModule from './ButtonModule';
import ListModule from './ListModule';
import LinkModule from './LinkModule';
import VideoModule from './VideoModule';
import ImageModule from './ImageModule';

class ModuleManager {
    constructor() {
        this.modules = {
            [ParagraphModule.name]: new ParagraphModule(),
            [MiseEnAvantModule.name]: new MiseEnAvantModule(),
            [ExergueModule.name]: new ExergueModule(),
            [HeaderModule.name]: new HeaderModule(),
            [ButtonEditorialModule.name]: new ButtonEditorialModule(),
            [ButtonModule.name]: new ButtonModule(),
            [ListModule.name]: new ListModule(),
            [LinkModule.name]: new LinkModule(),
            [VideoModule.name]: new VideoModule(),
            [ImageModule.name]: new ImageModule(),
        };
    }

    getModule(name) {
        return this.modules[name];
    }
}

export default ModuleManager;
