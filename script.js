let client = new Paho.MQTT.Client(
    'd57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud',
    8884,
    'printgo' + Math.random()
)
document.getElementById("demo").innerHTML = client;

client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 8884, 'letni-skola' + Math.random())

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: onConnect,
    userName: "robot",
    password: "P@ssW0rd!",
    useSSL: true
});


function onConnect() {
    console.log("onConnect");
    client.subscribe("bridge/#");
}

/*
const char TOPIC_SUB_COUNT_A[] = "/in/queue/count/a";
const char TOPIC_SUB_COUNT_B[] = "/in/queue/count/b";
const char TOPIC_SUB_COUNT_C[] = "/in/queue/count/c";
*/