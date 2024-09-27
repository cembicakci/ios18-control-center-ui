import { AirdropIcon, AirplaneIcon, BluetoothIcon, CellularBars, NetworkIcon, PersonalHotspotIcon, WifiIcon } from "@/assets/icons";

export const ForthScreenList = [
	{
		id: "1",
		title: "Uçak Modu",
		text: "Kapalı",
		icon: <AirplaneIcon />
	},
	{
		id: "2",
		title: "AirDrop",
		text: "Alma Kapalı",
		icon: <AirdropIcon />
	},
	{
		id: "3",
		title: "Wi-Fi",
		text: "FiberHGW_TP1234",
		icon: <WifiIcon />
	},
	{
		id: "4",
		title: "Hücresel Veri",
		text: "Açık",
		icon: <CellularBars />
	},
	{
		id: "5",
		title: "Bluetooth",
		text: "Airpods Pro",
		icon: <BluetoothIcon color={'red'}/>
	},
	{
		id: "6",
		title: "Kişisel Erişim Noktası",
		text: "Bulunamaz",
		icon: <PersonalHotspotIcon />
	},
	{
		id: "7",
		title: "VPN",
		text: "Kapalı",
		icon: <NetworkIcon />
	}
]