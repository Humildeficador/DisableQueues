function init() {
    if (!DataStore.has('ranked')) {
        DataStore.set('ranked', {
            quickPlay: false,
            draftPick: false,
            soloQueue: false,
            flex: false
        });
    }

}

function get() {
    return DataStore.get('ranked');
}

function update(k) {
    let pref = get()
    pref[k] = !get()[k]
    DataStore.set('ranked', pref);
}

function commandBar(id, name, callback) {
    CommandBar.addAction({
        id: id,
        name: name,
        group: "Disable Queue",
        hidden: false,
        perform: async () => await callback()
    });
}

function updateConfigAndShowToast(key, label) {
    commandBar(key, label, () => {
        update(key);
        if (get()[key]) {
            showToast(`Você desabilitou ${label}`);
        } else {
            showToast(`Você habilitou ${label}`);
        }
    });
}

function showToast(message) {
    Toast.success(message);
}

export default {
    init: init,
    get: get,
    update: update,
    updateConfigAndShowToast: updateConfigAndShowToast
}