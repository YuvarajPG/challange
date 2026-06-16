from scapy.all import sniff, IP
def process_packet(packet):
    try:
        if packet.haslayer(IP):
            ip_layer = packet[IP]

            protocols = {
                1: "ICMP",
                6: "TCP",
                17: "UDP"
            }

            protocol = protocols.get(ip_layer.proto, str(ip_layer.proto))

            print(f"Source IP      : {ip_layer.src}")
            print(f"Destination IP : {ip_layer.dst}")
            print(f"Protocol       : {protocol}")
            print("-" * 50)

    except Exception as e:
        print("Error processing packet:", e)

print("Starting packet capture...")

try:
    sniff(prn=process_packet, count=10, store=False)
except PermissionError:
    print("Run the program as Administrator.")
except Exception as e:
    print("Error:", e)