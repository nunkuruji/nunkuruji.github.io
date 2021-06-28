// api url

/*
Arkon = "3c5eecf8-d73b-4f76-85bd-19aa7fbe70ed"
Cybele = "2da61b35-19c0-4218-b491-eaef5ce1f850"
D'Orion = "82cf5ca5-532d-48d8-b69c-3766741f4e60"
Gaea = "a2c7a0e5-92d1-42cf-bd5c-248554596e9e"
Illara = "f5484f04-8c80-45d8-8c27-a5f3d8d61fbb"
Kane = "6d86b3e1-5c7c-4562-94c4-98bb189aa56a"
Kronos = "98e29399-27ab-4d64-8ee5-e989436db354"
Maeve = "94478851-1c2b-4573-831f-c43c6b22bebc"
Malekai = "6ac9cc89-edcd-4f4b-bf76-8ecf51f73c0d"
Valkyn = "a923173a-1fff-46b3-bbf8-223abb813483"
Yaga = "9177a6a3-2fa6-491b-b209-1b2a1851c434"
Zaleena = "15ed77e3-1018-4b0a-a042-0b2e01d61822"
*/


function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  

// Defining async function
async function getapi(url, pantheon) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	
	if (response) {
		hideloader();
	}
	return data
}
// Calling that async function


async function getall() {
	const arkon_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=3c5eecf8-d73b-4f76-85bd-19aa7fbe70ed";
	const cybele_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=2da61b35-19c0-4218-b491-eaef5ce1f850";
	const dorion_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=82cf5ca5-532d-48d8-b69c-3766741f4e60";
	const gaea_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=a2c7a0e5-92d1-42cf-bd5c-248554596e9e";
	const illara_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=f5484f04-8c80-45d8-8c27-a5f3d8d61fbb";
	const kane_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=6d86b3e1-5c7c-4562-94c4-98bb189aa56a";
	const kronos_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=98e29399-27ab-4d64-8ee5-e989436db354";
	const maeve_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=94478851-1c2b-4573-831f-c43c6b22bebc";
	const malekai_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=6ac9cc89-edcd-4f4b-bf76-8ecf51f73c0d";
	const valkyn_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=a923173a-1fff-46b3-bbf8-223abb813483";
	const yaga_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=9177a6a3-2fa6-491b-b209-1b2a1851c434";
	const zaleena_url = "https://artcraft.epicdata.io/public/guild-search?allegiance=15ed77e3-1018-4b0a-a042-0b2e01d61822";

	var arkon_data = await getapi(arkon_url, "Arkhon (Sun)");
	var cybele_data = await getapi(cybele_url, "Cybele (Sun)");
	var dorion_data = await getapi(dorion_url, "D'Orion (Earth)");
	var gaea_data = await getapi(gaea_url, "Gaea (Earth)");
	var illara_data = await getapi(illara_url, "Illara (Moon)");
	var kane_data = await getapi(kane_url, "Kane (Moon)");
	var kronos_data = await getapi(kronos_url, "Kronos (Earth)");
	var maeve_data = await getapi(maeve_url, "Maeve (Sun)");
	var malekai_data = await getapi(malekai_url, "Malekai (Moon)");
	var valkyn_data = await getapi(valkyn_url, "Valkyn (Sun)");
	var yaga_data = await getapi(yaga_url, "Yaga (Moon)");
	var zaleena_data = await getapi(zaleena_url, "Zaleena (Earth)");
	
	await arkon_data
	await cybele_data
	await dorion_data
	await gaea_data
	await illara_data
	await kane_data
	await kronos_data
	await maeve_data
	await malekai_data
	await valkyn_data
	await yaga_data
	await zaleena_data
	
	var data = [].concat(arkon_data, cybele_data, dorion_data, gaea_data, illara_data, kane_data, kronos_data, maeve_data, malekai_data, valkyn_data, yaga_data, zaleena_data)
	
	data.sort(function(a, b){return b.member_count - a.member_count});
	
	data.sort(function(a, b){return b.allegiance.faction_display_name > a.allegiance.faction_display_name});
	
	show(data);
}

getall()

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	
	var timenow = Math.floor(new Date().getTime())
	var twoweeks = 120960000
	var thirtydays = 2629743000
	
	let tab =
		`<thead><tr>
		<th>Name</th>
		<th>Members</th>
		<th>Faction</th>
		</tr></thead><tbody>`;
	
	// Loop to access all rows
	for (let r of data) {
		
		var dateupdated = r.date_updated
		//console.log(dateupdated)
		//console.log(timenow)
		if (dateupdated > timenow - thirtydays) {
		
		tab += `<tr>
	<td>${r.name} </td>
    <td>${r.member_count} </td>	
	<td>${r.allegiance.faction_display_name} </td>	
</tr>`;

		}
	}
	tab += `</tbody>`
	// Setting innerHTML as tab variable
	document.getElementById("guilds").innerHTML = tab;
}
