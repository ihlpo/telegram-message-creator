isLong = true;

function build_json(){
const message_output = document.getElementById('message_output');
const json_text_area = document.getElementById('json_text_area');
const message_id = document.getElementById('message_id').value;
const message_template = document.getElementById('message_template').value.toLowerCase();
const trade_id = document.getElementById('trade_id').value;
const asset = document.getElementById('asset').value.toUpperCase();
const direction_raw = document.getElementById('direction').value;
const direction = direction_raw.charAt(0).toUpperCase() + direction_raw.slice(1);
const entry = document.getElementById('entry').value;
const target = document.getElementById('target').value;
const leverage = document.getElementById('leverage').value;
const target_1 = document.getElementById('target_1').value;
const target_2 = document.getElementById('target_2').value;
const target_3 = document.getElementById('target_3').value;
const target_4 = document.getElementById('target_4').value;
const target_5 = document.getElementById('target_5').value;
const chart = document.getElementById('chart').value;
const stop = document.getElementById('stop').value;
const profit_percentage = Math.abs((((target - entry)/entry) * 100) * leverage).toFixed(2);
const copy_button = document.getElementById('copy-btn');

const target_2_toggle = document.getElementById('target_2');

let message = null;
let message2 = null;
let message3 = null;
let message_update = null;
let isLong = direction.toLowerCase() === "long" ? true : false;

function moving_stop_loss(number){
   if (number === '1'){
      return `Stop Loss Moved To Entry`;
   }
}

function calculate_long_rrr(){
   let targetPNL = (target_5 - entry) / entry;
   let stopPNL = (entry - stop) / entry;
   let rrr = targetPNL > 0 ? targetPNL / stopPNL : (targetPNL / stopPNL) * -1;
   return rrr.toFixed(2)
}

function calculate_short_rrr(){
   let targetPNL = (entry - target_5) / entry;
   let stopPNL = (stop - entry) / entry;
   let rrr = targetPNL > 0 ? targetPNL / stopPNL : (targetPNL / stopPNL) * -1;
   return rrr.toFixed(2)
}
if (parseInt(message_template) === 5){

   document.getElementById('entry').disabled = false;
   document.getElementById('target').disabled = false;
   document.getElementById('leverage').disabled = false;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = true;

   message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
All Targets Hit🔥
Trade Finished 🏁
Total Profit: +${profit_percentage}% (with ${leverage}x leverage)`

   message2 = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
All Targets Hit 🔥
Trade Finished 🏁
Total Profit: +${profit_percentage}% (with ${leverage}x leverage)
———————————
Get exclusive early access to high win rate signals - t.me/Signali_VIP_Bot`

   message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
      
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
      
Status:
Entry Triggered 🚀
Target 1 Hit💰
Target 2 Hit💰💰
Target 3 Hit💰💰💰
Target 4 Hit💰💰💰💰
Target 5 Hit💰💰💰💰💰
All Targets Hit 🔥
Trade Finished 🏁`
      
}
else if (message_template.toLowerCase() === 'start'){

   document.getElementById('entry').disabled = false;
   document.getElementById('target').disabled = true;
   document.getElementById('leverage').disabled = false;
   document.getElementById('target_1').disabled = false;
   document.getElementById('target_2').disabled = false;
   document.getElementById('target_3').disabled = false;
   document.getElementById('target_4').disabled = false;
   document.getElementById('target_5').disabled = false;
   document.getElementById('chart').disabled = false;
   document.getElementById('stop').disabled = false;

   message = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
   
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
   
Status: Waiting to Trigger`
}

else if (parseInt(message_template) === -2){

   document.getElementById('entry').disabled = false;
   document.getElementById('target').disabled = false;
   document.getElementById('leverage').disabled = false;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = false;

   message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Trade Finished 🏁
Max Total Profit: +${profit_percentage}% (with ${leverage}x leverage)`
   message2 = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Trade Finished 🏁
Max Total Profit: +${profit_percentage}% (with ${leverage}x leverage)
———————————
Get Exclusive Early Access to High Win Rate Signals - t.me/Signali_VIP_Bot`
}

else if ([1,2,3,4].includes(parseInt(message_template))){

   document.getElementById('entry').disabled = false;
   document.getElementById('target').disabled = false;
   document.getElementById('leverage').disabled = false;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = true;

   if (message_template === '1'){
      message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
Profit: +${profit_percentage}% (with ${leverage}x leverage)`

      message2 = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
Profit: +${profit_percentage}% (with ${leverage}x leverage)

Get Exclusive Early Access to High Win Rate Signals - t.me/Signali_VIP_Bot`

      message3 = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
   
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x`

      message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
         
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
         
Status:
Entry Triggered 🚀
Target 1 Hit💰`
}
   else {
      message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
Profit: +${profit_percentage}% (with ${leverage}x leverage)`

      message2 = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Target ${message_template} Hit${'💰'.repeat(message_template)}
Profit: +${profit_percentage}% (with ${leverage}x leverage)

Get Exclusive Early Access to High Win Rate Signals - t.me/Signali_VIP_Bot`
      
      if (message_template === '2'){
         message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
         
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
         
Status:
Entry Triggered 🚀
Target 1 Hit💰
Target 2 Hit💰💰`
}
      else if(message_template === '3'){
         message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
      
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
      
Status:
Entry Triggered 🚀
Target 1 Hit💰
Target 2 Hit💰💰
Target 3 Hit💰💰💰`
}
      else if(message_template === '4'){
         message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
      
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
      
Status:
Entry Triggered 🚀
Target 1 Hit💰
Target 2 Hit💰💰
Target 3 Hit💰💰💰
Target 4 Hit💰💰💰💰`
} 
}
}

else {
if (parseInt(message_template) === 0){

   document.getElementById('entry').disabled = true;
   document.getElementById('target').disabled = true;
   document.getElementById('leverage').disabled = true;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = true;

   message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Entry Triggered 🚀`

message2 = `${asset} ${chart} ${direction} Entry Triggered!

Get Exclusive Early Access to High Win Rate Signals - t.me/Signali_VIP_Bot`

   message_update = `🚨Trade Signal🚨
Trade ID: ${trade_id}
Asset: ${asset}
Chart: ${chart}
Direction: ${direction} ${isLong ? "⬆️" : "⬇️"}
🚀 Entry: ~${entry}
❌ Stop: ~${stop}
💰Target 1: ~${target_1}
💰Target 2: ~${target_2}
💰Target 3: ~${target_3}
💰Target 4: ~${target_4}
💰Target 5: ~${target_5}
      
Total Risk Reward: ${isLong ? calculate_long_rrr() : calculate_short_rrr()}
Maximum Leverage: ${leverage}x
      
Status:
Entry Triggered 🚀`
      
}
else if (parseInt(message_template) === -1){

   document.getElementById('entry').disabled = true;
   document.getElementById('target').disabled = true;
   document.getElementById('leverage').disabled = true;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = true;

   message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Stopped Out❌
Trade Finished 🏁`
}

else if (message_template.toLowerCase() === 'never'){
   document.getElementById('entry').disabled = true;
   document.getElementById('target').disabled = true;
   document.getElementById('leverage').disabled = true;
   document.getElementById('target_1').disabled = true;
   document.getElementById('target_2').disabled = true;
   document.getElementById('target_3').disabled = true;
   document.getElementById('target_4').disabled = true;
   document.getElementById('target_5').disabled = true;
   document.getElementById('chart').disabled = true;
   document.getElementById('stop').disabled = true;

   message = `Trade ID: ${trade_id}
${asset} ${chart} ${direction} ${isLong ? "⬆️" : "⬇️"}
Setup Invalidated - Never Triggered 💤
Trade Finished 🏁`
}
};

message_output.innerHTML = `${message}`;

let encoded_message = encodeURIComponent(message);
let encoded_message2 = encodeURIComponent(message2);
let encoded_message3 = encodeURIComponent(message3);
let encoded_message_update = encodeURIComponent(message_update)

function buildJSON(message_id, rendered_message, rendered_message2, rendered_message3, rendered_message_updated){
   let output = {
       'message_id': parseInt(message_id),
       'message': rendered_message,
       'message2': rendered_message2,
       'message3': rendered_message3,
       'message_update': rendered_message_updated
   }
   return JSON.stringify(output);
}

json_text_area.innerHTML = `${buildJSON(message_id, encoded_message, encoded_message2, encoded_message3, encoded_message_update)}`

copy_button.addEventListener('click', function() {
   let textarea = document.getElementById("json_text_area");
   document.getElementById("json_text_area").select();
   document.execCommand('copy');
 });

}

document.getElementById("message_id").addEventListener("input", build_json);
document.getElementById("message_template").addEventListener("input", build_json);
document.getElementById("trade_id").addEventListener("input", build_json);
document.getElementById("asset").addEventListener("input", build_json);
document.getElementById("direction").addEventListener("input", build_json);
document.getElementById("entry").addEventListener("input", build_json);
document.getElementById("target").addEventListener("input", build_json);
document.getElementById("leverage").addEventListener("input", build_json);
document.getElementById("target_1").addEventListener("input", build_json);
document.getElementById("target_2").addEventListener("input", build_json);
document.getElementById("target_3").addEventListener("input", build_json);
document.getElementById("target_4").addEventListener("input", build_json);
document.getElementById("target_5").addEventListener("input", build_json);
document.getElementById("stop").addEventListener("input", build_json);
document.getElementById("chart").addEventListener("input", build_json);
