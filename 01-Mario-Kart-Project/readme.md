<h1>Felipão's Project Challenge: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create the logic of a video game to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 4</p>
            <p>Handling: 3</p>
            <p>Power: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Handling: 4</p>
            <p>Power: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Handling: 4</p>
            <p>Power: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 5</p>
            <p>Handling: 2</p>
            <p>Power: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Handling: 4</p>
            <p>Power: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Handling: 2</p>
            <p>Power: 5</p>
        </td>
    </tr>
</table>

<h3>🕹️ Rules & Mechanics:</h3>

<b>Players:</b><br>
<input type="checkbox" id="players-item" />
<label for="players-item">The computer must receive two characters to race, each represented as an object</label>

<br>
<b>Tracks:</b>
<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">The characters will race on a random track of 5 rounds</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">Each round, a track block will be drawn that can be straight, a curve, or a battle</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track block is STRAIGHT, the player must roll a 6-sided die and add the SPEED attribute; whoever has the highest score wins 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the track block is a CURVE, the player must roll a 6-sided die and add the HANDLING attribute; whoever has the highest score wins 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the track block is a BATTLE, the player must roll a 6-sided die and add the POWER attribute; the loser loses 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-4-item" /> <label for="tracks-2-4-item">No player can have a negative score (below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Battle (Extra):</b>
<ul>
  <li><input type="checkbox" id="battle-1-item" /> Randomly draw if it’s a shell (-1 point) or a bomb (-2 points)</li>
  <li><input type="checkbox" id="battle-2-item" /> The winner of the battle randomly gains a turbo (+1 point)</li>
</ul>

<b>Victory Condition:</b><br>
<input type="checkbox" id="victory-item" />
<label for="victory-item">At the end, the player with the most points wins</label>
