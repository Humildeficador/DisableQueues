/**
 * @author Humildeficador
 * @name DisableQueues
 * @description Select queue to disable
 * @version 1.0
 */

import config from "./config";
import  { pluginInit }  from "./utils";

export async function init(context) {
    config.init();

    config.updateConfigAndShowToast('quickPlay', 'QuickPlay');
    config.updateConfigAndShowToast('draftPick', 'Draft Pick');
    config.updateConfigAndShowToast('soloQueue', 'Ranked Solo/Duo');
    config.updateConfigAndShowToast('flex', 'Ranked Flex');

    pluginInit()
}