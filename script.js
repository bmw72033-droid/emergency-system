const SUPABASE_URL = "https://ezirapbynmyndvtwrefj.supabase.co";
const SUPABASE_KEY = "sb_publishable_vROJEoA2pQ-9OHMUUCgLvA_8X_Ss_Rb";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
async function sendReport(){

    const description = document.getElementById("description").value;

    const { data, error } = await supabaseClient
    .from("reports")
    .insert([
        {
            description: description,
            status: "new"
        }
    ]);

    if(error){
        alert("Error sending report");
        console.log(error);
    }
    else{
        alert("Emergency report sent!");
    }

}
