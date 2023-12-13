
import { useState } from 'react';    
import DisplayPlayer from './displayplayer';
import arrPlayers from './players'; // Import players data

function ListPlayers() {
           
const [selectedPlayerId, setSelectedPlayerId] = useState(null);

const handleMoreClick = (playerId) => {
        setSelectedPlayerId(playerId);
};
    return (
        <section className="w-1140px"> 
            <h2>Top 10 Soccer Players</h2> 
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name/Age</th>
                        <th>Trophies</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Details</th>
                        <th>Delete</th>
                     </tr>
                     </thead>
                     <tbody>
                     {arrPlayers.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.firstName} {p.lastName} ({p.age})</td>
                            <td>{p.trophies}</td>
                            <td>{p.club}</td>
                            <td>{p.nationality}</td>
                            <td><button onClick={()=>handleMoreClick(p.id)}>More...</button></td>
                            <td> <button className="delete" onClick={()=> handleMoreClick(p.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

{selectedPlayerId && <DisplayPlayer playerId={selectedPlayerId} />}
        </section>
    );
}

export default ListPlayers;
