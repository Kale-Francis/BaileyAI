// For Landing Page
function scrollToSignup() {
    window.location.href = '../auth/signup.html';
}

// For Signup Form
function handleSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (!email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (!terms) {
        alert('You must agree to the Terms & Privacy Policy.');
        return;
    }

    alert('Signup successful! Please check your email to verify.');
    window.location.href = 'login.html';
}

// For Login Form
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    alert('Login successful! Redirecting to dashboard...');
    window.location.href = '../dashboard/main.html';
}

// For Dashboard - Simulated Data Store with localStorage
let recaps = JSON.parse(localStorage.getItem('recaps')) || [
    { id: 1, type: 'video', title: 'Video Recap – Meeting Notes', date: '3/19/2025', status: 'Processing... 75%' },
    { id: 2, type: 'text', title: 'Text Recap – Article Summary', date: '3/19/2025', status: 'Processing... 20%' },
    { id: 3, type: 'image', title: 'Image Recap – Vacation Photo', date: '3/18/2025', summary: 'Beach scene with family, sunny weather.' },
    { id: 4, type: 'video', title: 'Short from Tutorial Video', date: '3/17/2025', summary: '30-sec clip: Mixing cake batter.', isShort: true }
];

// Save recaps to localStorage
function saveRecaps() {
    localStorage.setItem('recaps', JSON.stringify(recaps));
}

// For Dashboard - Upload Modal (only on main.html)
function showUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    } else {
        alert('Upload feature is available from the main dashboard.');
        window.location.href = 'main.html';
    }
}

function closeUploadModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function handleUpload(event) {
    event.preventDefault();

    const contentType = document.getElementById('content-type').value;
    const file = document.getElementById('file-upload').files[0];
    const spinner = document.getElementById('upload-spinner');
    const uploadButton = document.querySelector('#upload-form .cta-button');

    if (!contentType || !file) {
        alert('Please select a content type and upload a file.');
        return;
    }

    if (file.size > 100 * 1024 * 1024) {
        alert('File size exceeds 100MB limit.');
        return;
    }

    // Show loading spinner
    spinner.style.display = 'flex';
    uploadButton.style.display = 'none';

    // Simulate upload and processing
    setTimeout(() => {
        const newRecap = {
            id: recaps.length + 1,
            type: contentType,
            title: `${contentType.charAt(0).toUpperCase() + contentType.slice(1)} Recap – ${file.name}`,
            date: new Date().toLocaleDateString(),
            status: 'Processing... 0%'
        };

        recaps.push(newRecap);
        saveRecaps();
        updateOngoingRecaps();
        updateVideoRecaps();
        updateMyRecaps();

        spinner.style.display = 'none';
        uploadButton.style.display = 'block';
        closeUploadModal();

        // Simulate processing completion after 3 seconds
        setTimeout(() => {
            newRecap.status = 'Completed';
            newRecap.summary = `Summary of ${contentType}: ${file.name}`;
            saveRecaps();
            updateOngoingRecaps();
            updateRecentRecaps();
            updateMyRecaps();
            // Redirect to main dashboard to show updated recaps
            window.location.href = 'main.html';
        }, 3000);
    }, 2000);
}

// Update Ongoing Recaps (main.html)
function updateOngoingRecaps() {
    const ongoingGrid = document.getElementById('ongoing-recaps-grid');
    if (!ongoingGrid) return;

    ongoingGrid.innerHTML = '';

    const ongoing = recaps.filter(recap => recap.status && recap.status.includes('Processing'));
    ongoing.forEach(recap => {
        const card = document.createElement('div');
        card.className = 'recap-card';
        card.innerHTML = `
            <div class="recap-placeholder">${recap.type === 'video' ? '🎥' : recap.type === 'image' ? '🖼️' : '📝'}</div>
            <h4>${recap.title}</h4>
            <p>${recap.date} | ${recap.status}</p>
        `;
        ongoingGrid.appendChild(card);
    });
}

// Update Recent Recaps & Shorts (main.html)
function updateRecentRecaps() {
    const recentGrid = document.getElementById('recent-recaps-grid');
    if (!recentGrid) return;

    recentGrid.innerHTML = '';

    const recent = recaps.filter(recap => !recap.status || recap.status === 'Completed');
    recent.forEach(recap => {
        const card = document.createElement('div');
        card.className = 'recap-card';
        card.innerHTML = `
            <div class="recap-placeholder">${recap.type === 'video' ? '🎥' : recap.type === 'image' ? '🖼️' : '📝'}</div>
            <h4>${recap.title}</h4>
            <p>${recap.date} | ${recap.summary}</p>
            ${recap.isShort ? '<button class="share-button">Share to Reels</button>' : ''}
        `;
        recentGrid.appendChild(card);
    });
}

// Update My Recaps (my-recaps.html)
function updateMyRecaps() {
    const myRecapsGrid = document.getElementById('my-recaps-grid');
    if (!myRecapsGrid) return;

    myRecapsGrid.innerHTML = '';

    recaps.forEach(recap => {
        const card = document.createElement('div');
        card.className = 'recap-card';
        card.innerHTML = `
            <div class="recap-placeholder">${recap.type === 'video' ? '🎥' : recap.type === 'image' ? '🖼️' : '📝'}</div>
            <h4>${recap.title}</h4>
            <p>${recap.date} | ${recap.status || recap.summary}</p>
        `;
        myRecapsGrid.appendChild(card);
    });
}

// Update Video Recaps for Reels Section (reels.html)
function updateVideoRecaps() {
    const videoRecapsGrid = document.getElementById('video-recaps-grid');
    if (!videoRecapsGrid) return;

    videoRecapsGrid.innerHTML = '';

    const videoRecaps = recaps.filter(recap => recap.type === 'video' && (!recap.status || recap.status === 'Completed'));
    videoRecaps.forEach(recap => {
        const card = document.createElement('div');
        card.className = 'recap-card';
        card.innerHTML = `
            <div class="recap-placeholder">🎥</div>
            <h4>${recap.title}</h4>
            <p>${recap.date} | ${recap.summary}</p>
            <button class="generate-reel-button" onclick="generateReel(${recap.id})">Generate Reel</button>
        `;
        videoRecapsGrid.appendChild(card);
    });
}

// Generate Reel (Simulated)
function generateReel(recapId) {
    const recap = recaps.find(r => r.id === recapId);
    if (!recap) return;

    // Simulate Reel generation
    const newShort = {
        id: recaps.length + 1,
        type: 'video',
        title: `Reel from ${recap.title}`,
        date: new Date().toLocaleDateString(),
        summary: `15-sec clip: Highlight from ${recap.title}.`,
        isShort: true
    };

    recaps.push(newShort);
    saveRecaps();
    updateRecentRecaps();
    alert(`Reel generated successfully for ${recap.title}! Check the Recent Recaps & Shorts section on the main dashboard.`);
    window.location.href = 'main.html';
}

// Toggle Sidebar on Mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Initialize Dashboard Pages
document.addEventListener('DOMContentLoaded', () => {
    updateOngoingRecaps();
    updateRecentRecaps();
    updateVideoRecaps();
    updateMyRecaps();
});