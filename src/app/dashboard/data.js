import marcus from "@/app/dashboard/images/marcus.jpg"
import jaydon from "@/app/dashboard/images/jaydon.jpg"
import corey from "@/app/dashboard/images/corey.jpg"
import cooper from "@/app/dashboard/images/cooper.jpg"
import phillip from "@/app/dashboard/images/phillip.jpg"
import download from "@/app/dashboard/images/document-download.jpg"



export const BarChartData = {

    labels: [
        "Jan", 
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    datasets:[
        {
            label: null,
            data: [7.000, 15.000, 3.000, 28.000, 9.000, 45.000, 10.000, 20.000, 31.000, 50.00, 30.000, 25.000],
            borderColor: "rgb(75, 192, 192)",
            borderWidth: "20px",
            backgroundColor: [
                "rgb(199, 249, 249)", "rgb(199, 249, 249)", "rgb(199, 249, 249)", "rgb(199, 249, 249)", "rgb(199, 249, 249)", "#53D2B3", "rgb(199, 249, 249)", "rgb(199, 249, 249)","rgb(199, 249, 249)","rgb(199, 249, 249)","rgb(199, 249, 249)","rgb(199, 249, 249)",
            ],
            borderRadius: 20,
        }
    ],
};

export const lastOrders = [
    {
        id: 1,
        pic: marcus,
        name: "Marcus Bergson",
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 2,
        pic: jaydon,
        name: "Jaydon Vaccaro",
        date: "Nov 15, 2023",
        amount: "$150,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 3,
        pic: corey,
        name: "Corey Schleifer",
        date: "Nov 14, 2023",
        amount: "$87,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 4,
        pic: cooper,
        name: "Cooper Press",
        date: "Nov 14, 2023",
        amount: "$100,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 5,
        pic: phillip,
        name: "Phillip Lubin",
        date: "Nov 13, 2023",
        amount: "$78,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 6,
        pic: marcus,
        name: "Marcus Bergson",
        date: "Nov 15, 2023",
        amount: "$80,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 7,
        pic: jaydon,
        name: "Jaydon Vaccaro",
        date: "Nov 15, 2023",
        amount: "$150,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 8,
        pic: corey,
        name: "Corey Schleifer",
        date: "Nov 14, 2023",
        amount: "$87,000",
        status: "Paid",
        invoice: download
    },
    {
        id: 9,
        pic: cooper,
        name: "Cooper Press",
        date: "Nov 14, 2023",
        amount: "$100,000",
        status: "Refund",
        invoice: download
    },
    {
        id: 10,
        pic: phillip,
        name: "Phillip Lubin",
        date: "Nov 13, 2023",
        amount: "$78,000",
        status: "Paid",
        invoice: download
    },
    
]

export const platforms = [
    {
        id: 1,
        name: "Book Bazaar",
        cost: "$2,500,000",
        color: "purple",
        extra: "+15%",
        level: "60%"
    },
    {
        id: 2,
        name: "Artisan Aisle",
        cost: "$1,800,000",
        color: "blue",
        extra: "+10%",
        level: "50%"
    },
    {
        id: 3,
        name: "Toy Troop",
        cost: "$1,200,000",
        color: "yellow",
        extra: "+8%",
        level: "40%",
    },
    {
        id: 4,
        name: "XStore",
        cost: "$600,000",
        color: "red",
        extra: "+5%",
        level: "30%"
    },
    {
        id: 5,
        name: "Book Bazaar",
        cost: "$2,500,000",
        color: "purple",
        extra: "+15%",
        level: "60%"
    },
    {
        id: 6,
        name: "Artisan Aisle",
        cost: "$1,800,000",
        color: "blue",
        extra: "+10%",
        level: "50%"
    },
    {
        id: 7,
        name: "Toy Troop",
        cost: "$1,200,000",
        color: "yellow",
        extra: "+8%",
        level: "40%",
    },
    {
        id: 8,
        name: "XStore",
        cost: "$600,000",
        color: "red",
        extra: "+5%",
        level: "30%"
    },

    
]