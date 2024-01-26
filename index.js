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

    config.updateConfigAndShowToast('quickPlay', 'Jogo Rápido');
    config.updateConfigAndShowToast('draftPick', 'Escolha Alternada');
    config.updateConfigAndShowToast('soloQueue', 'Ranqueada Solo/Duo');
    config.updateConfigAndShowToast('flex', 'Ranqueada Flexível');

    pluginInit()
}