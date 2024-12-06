import React from 'react';

const ConfirmDeleteModal = props => {
    return (
        <>
        <h4>Hapus FQDN?</h4>
        <h6>Menghapus FQDN ini akan menghapus semua data yang terkait dengannya dari database. Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin?</h6>
        <button>Konfirmasi</button>
        <button>Batalkan</button>
        </>
    );
}

export default ConfirmDeleteModal;