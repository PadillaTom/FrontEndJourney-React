const txtTrollName = document.getElementById('txtTrollName');
const txtTrollMsg = document.getElementById('txtTrollMsg');
const btnNewTrollMsg = document.getElementById('btnNewTrollMsg');

function updateTrollbox(trollPost) {
    var trollData = '<p><b>' + trollPost.troll;
    trollData += '</b> said: ' + trollPost.message;
    trollData += ' - <small>' + trollPost.date + '</small><p>';

    // inject into HTML list element
    var currentTrollbox = document.getElementById('trollbox').innerHTML;
    document.getElementById('trollbox').innerHTML = currentTrollbox + trollData;
}

// new trollbox entry
btnNewTrollMsg.addEventListener('click', e => {
    const troll = txtTrollName.value;
    const msg = txtTrollMsg.value;
    const now = new Date();
    const trollPost = {
        troll: troll,
        message: msg,
        date: now.toUTCString()
    };

    // update posts
    updateTrollbox(trollPost);

    // clear textbox
    document.getElementById('txtTrollName').value = '';
    document.getElementById('txtTrollMsg').value = '';
    console.clear();
});
