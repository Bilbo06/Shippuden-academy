document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    loadExercises();
    loadChallenges();
});

function loadCourses() {
    const coursesContent = document.getElementById('courses-content');
    coursesContent.innerHTML = `
        <div>
            <h3>Course 1: Les bases des mathématiques</h3>
            <p>Description du cours...</p>
        </div>
        <div>
            <h3>Course 2: Algebra avancée</h3>
            <p>Description du cours...</p>
        </div>
    `;
}

function loadExercises() {
    const exercisesContent = document.getElementById('exercises-content');
    exercisesContent.innerHTML = `
        <div>
            <h3>Exercise 1: Résoudre des équations</h3>
            <p>Description de l'exercice...</p>
        </div>
        <div>
            <h3>Exercise 2: Problèmes d'algèbre</h3>
            <p>Description de l'exercice...</p>
        </div>
    `;
}

function loadChallenges() {
    const challengesContent = document.getElementById('challenges-content');
    challengesContent.innerHTML = `
        <div>
            <h3>Défi 1: Énigme mathématique</h3>
            <p>Description du défi...</p>
        </div>
        <div>
            <h3>Défi 2: Combat de ninja</h3>
            <p>Description du défi...</p>
        </div>
    `;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            document.getElementById('login-message').innerText = 'Connexion réussie';
        } else {
            document.getElementById('login-message').innerText = 'Mot de passe incorrect';
        }
    } else {
        const user = { username, password, points: 0 };
        localStorage.setItem(username, JSON.stringify(user));
        document.getElementById('login-message').innerText = 'Utilisateur enregistré et connecté';
    }
}
