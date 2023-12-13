import arrPlayers from './players'; // Import the players array

function DisplayPlayer({ playerId }) {
    // Find the player with the matching ID
    const player = arrPlayers.find(p => p.id === playerId);

    // Render player details or a message if not found
    if (player) {
        return (
            <section className="w-1140px">
                <h2>{player.firstName} {player.lastName} ({player.age})</h2>
                <p><b>Club</b>: {player.club}</p>
                <p><b>Nationality</b>: {player.nationality}</p>
                <p><b>Trophies</b>: {player.trophies.join(', ')}</p>
                <p><b>Bio</b>: {player.bio}</p>
            </section>
        );
    } else {
        return (
            <section className="w-1140px">
                <p>Player not found.</p>
            </section>
        );
    }
}

export default DisplayPlayer;