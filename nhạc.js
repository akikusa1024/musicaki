const songs = [
    { "title": "Người tình Mai Ya Hee", "genre": "Nhạc xập xình" },
    { "title": "Cô đôi thượng ngàn", "genre": "Nhạc xập xình" },
    { "title": "Trú Mưa", "genre": "Nhạc xập xình" },
    { "title": "Nàng kiều lỡ bước", "genre": "Nhạc xập xình" },
    { "title": "Bên anh đêm nay", "genre": "Nhạc xập xình" },
    { "title": "Có duyên không nợ", "genre": "Nhạc xập xình" },
    { "title": "Phai dấu cuộc tình", "genre": "Nhạc xập xình" },
    { "title": "Như một người dưng", "genre": "Nhạc xập xình" },
    { "title": "Vở kịch của em", "genre": "Nhạc xập xình" },
    { "title": "Hẹn hò nhưng không yêu", "genre": "Nhạc xập xình" },
    { "title": "Cánh hoa héo tàn", "genre": "Nhạc xập xình" },
    { "title": "Để anh lương thiện", "genre": "Nhạc xập xình" },
    { "title": "Nơi vực nơi trời", "genre": "Nhạc xập xình" },
    { "title": "Amore Mio", "genre": "Nhạc xập xình" },
    { "title": "Tuyết yêu thương", "genre": "Nhạc xập xình" },
    { "title": "Thu cuối", "genre": "Nhạc xập xình" },
    { "title": "Anh đau từ lúc em đi", "genre": "Nhạc xập xình" },
    { "title": "Trói em lại / Thuỷ triều", "genre": "Nhạc xập xình" },
    { "title": "Chiếc khăn piêu", "genre": "Nhạc xập xình" },
    { "title": "Điều anh biết", "genre": "Nhạc xập xình" },
    { "title": "Con bướm xuân", "genre": "Nhạc xập xình" },
    { "title": "Không cảm xúc", "genre": "Nhạc xập xình" },
    { "title": "ĐỘ TỘC", "genre": "Nhạc var" },
    { "title": "STREAM ĐẾN BAO GIỜ", "genre": "Nhạc var" },
    { "title": "Pickleball", "genre": "Nhạc var" },
    { "title": "Con trai cưng", "genre": "Nhạc var" },
    { "title": "Vị của anh", "genre": "Nhạc var" },
    { "title": "Trình", "genre": "Nhạc var" },
    { "title": "Không thấy ngày về", "genre": "Nhạc var" },
    { "title": "Kiếp đỏ đen", "genre": "Nhạc var" },
    { "title": "Tình ca thanh hoá", "genre": "Nhạc var" },
    { "title": "Rap thanh hoá", "genre": "Nhạc var" },
    { "title": "Last night", "genre": "Nhạc var" },
    { "title": "Vì sao tôi là gay", "genre": "Nhạc var" },
    { "title": "Không thấy ngày về", "genre": "Nhạc var" },
    { "title": "Như những phút ban đầu", "genre": "Nhạc ballad" },
    { "title": "Tha thứ lỗi lầm", "genre": "Nhạc ballad" },
    { "title": "Dẫu có lỗi lầm", "genre": "Nhạc ballad" },
    { "title": "Cơn mưa tình yêu", "genre": "Nhạc ballad" },
    { "title": "Tìm lại bầu trời", "genre": "Nhạc ballad" },
    { "title": "Bông hoa đẹp nhất", "genre": "Nhạc ballad" },
    { "title": "Suy nghĩ trong anh", "genre": "Nhạc ballad" },
    { "title": "Vết mưa", "genre": "Nhạc ballad" },
    { "title": "Nơi tình yêu kết thúc", "genre": "Nhạc ballad" },
    { "title": "Nơi tình yêu bắt đầu", "genre": "Nhạc ballad" },
    { "title": "Một thời đã xa", "genre": "Nhạc ballad" },
    { "title": "Gọi tên em trong đêm", "genre": "Nhạc ballad" },
    { "title": "Tháng tư là lời nói dối của em", "genre": "Nhạc ballad" },
    { "title": "1 phút", "genre": "Nhạc ballad" },
    { "title": "Thay tôi yêu cô ấy", "genre": "Nhạc ballad" },
    { "title": "Hết thương cạn nhớ", "genre": "Nhạc ballad" },
    { "title": "Một bước yêu vạn dặm đau", "genre": "Nhạc ballad" },
    { "title": "Anh ơi ở lại", "genre": "Nhạc ballad" },
    { "title": "Nếu ngày ấy", "genre": "Nhạc ballad" },
    { "title": "Ngày mai người ta đi lấy chồng", "genre": "Nhạc ballad" },
    { "title": "Khoá ly biệt", "genre": "Nhạc ballad" },
    { "title": "Rồi em sẽ gặp một chàng trai khác", "genre": "Nhạc ballad" },
    { "title": "Anh chưa thương em đến vậy đâu", "genre": "Nhạc ballad" },
    { "title": "Đừng như thói quen", "genre": "Nhạc ballad" },
    { "title": "Chạm đáy nỗi đau", "genre": "Nhạc ballad" },
    { "title": "Rời bỏ", "genre": "Nhạc ballad" },
    { "title": "Trong trí nhớ của anh", "genre": "Nhạc ballad" },
    { "title": "Thương em là điều anh không thể ngờ", "genre": "Nhạc ballad" },
    { "title": "Chiều hôm ấy", "genre": "Nhạc ballad" },
    { "title": "Giữ em đi", "genre": "Nhạc ballad" },
    { "title": "Xe đạp", "genre": "Nhạc ballad" },
    { "title": "Chờ ngày anh nhận ra em", "genre": "Nhạc ballad" },
    { "title": "Xin đừng lặng im", "genre": "Nhạc ballad" },
    { "title": "Đừng ai nhắc về cô ấy", "genre": "Nhạc ballad" },
    { "title": "Sao em vô tình", "genre": "Nhạc ballad" },
    { "title": "Em không sai chúng ta sai", "genre": "Nhạc ballad" },
    { "title": "Phía sau một cô gái", "genre": "Nhạc ballad" },
    { "title": "Nếu là anh", "genre": "Nhạc ballad" },
    { "title": "Duyên mình lỡ", "genre": "Nhạc ballad" },
    { "title": "Chân tình", "genre": "Nhạc ballad" },
    { "title": "Thuận theo ý", "genre": "Nhạc ballad" },
    { "title": "Em dạo này", "genre": "Nhạc ballad" },
    { "title": "Mascara", "genre": "Nhạc ballad" },
    { "title": "Cảm ơn và xin lỗi", "genre": "Nhạc ballad" },
    { "title": "Vùng ký ức", "genre": "Nhạc ballad" },
    { "title": "Ngày chưa giông", "genre": "Nhạc ballad" },
    { "title": "Đông kiếm em", "genre": "Nhạc ballad" },
    { "title": "Lạ Lùng", "genre": "Nhạc ballad" },
    { "title": "Giữ lấy làm gì", "genre": "Nhạc ballad" },
    { "title": "Cơn mưa tình yêu", "genre": "Song ca" },
    { "title": "Đừng như thói quen", "genre": "Song ca" },
    { "title": "Tình yêu màu nắng", "genre": "Song ca" },
    { "title": "Mượn rượu tỏ tình", "genre": "Song ca" },
    { "title": "Yêu Nắm", "genre": "Song ca" },
    { "title": "Thích quá rùi nà", "genre": "Song ca" },
    { "title": "Chân ái", "genre": "Song ca" },
    { "title": "Người lạ ơi", "genre": "Song ca" },
    { "title": "Khó vẽ nụ cười", "genre": "Song ca" },
    { "title": "Ex's Hate Me", "genre": "Song ca" },
    { "title": "Mặt trời của em", "genre": "Song ca" },
    { "title": "Thằng điên", "genre": "Song ca" },
    { "title": "Anh đánh rơi người yêu này", "genre": "Song ca" },
    { "title": "Cưới nhau đi", "genre": "Song ca" },
    { "title": "Bật tình yêu lên", "genre": "Song ca" },
    { "title": "Tận cùng nỗi nhớ", "genre": "Song ca" },
    { "title": "Từ thích thích thành thương", "genre": "Song ca" }
];

let currentGenre = 'All';

function getGenreClass(genre) {
    switch(genre) {
        case 'Nhạc xập xình': return 'tag-xapxinh';
        case 'Nhạc var': return 'tag-var';
        case 'Nhạc ballad': return 'tag-ballad';
        case 'Song ca': return 'tag-songca';
        default: return '';
    }
}

function displaySongs(data) {
    const list = document.getElementById('songList');
    const info = document.getElementById('countInfo');
    list.innerHTML = '';
    
    data.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        const tagClass = getGenreClass(song.genre);
        card.innerHTML = `
            <span class="song-title">${song.title}</span>
            <span class="genre-tag ${tagClass}">${song.genre}</span>
        `;
        list.appendChild(card);
    });

    info.innerText = `Cậu đang xem ${data.length} giai điệu xinh xắn 🎀`;
}

function setGenre(genre) {
    currentGenre = genre;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnText = btn.innerText;
        if(genre === 'All' && btnText.includes('Tất cả')) btn.classList.add('active');
        else if(btnText.includes(genre.replace('Nhạc ', ''))) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    filterSongs();
}

function filterSongs() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filtered = songs.filter(song => {
        const matchesGenre = currentGenre === 'All' || song.genre === currentGenre;
        const matchesSearch = song.title.toLowerCase().includes(searchTerm);
        return matchesGenre && matchesSearch;
    });
    displaySongs(filtered);
}

displaySongs(songs);