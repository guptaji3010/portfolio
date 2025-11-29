const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');

dotenv.config();

connectDB();

const projects = [
    {
        title: "AI-Powered Customer Support System",
        description: "Designed and implemented an AI-powered Customer Support Assistant to streamline consultation booking and product guidance. Established a policy-driven, context-aware AI communication system, enhancing user engagement and accuracy.",
        tags: ["AI Agents", "Botpress", "Customer Support", "Automation"],
        link: "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/18/11/20250718111315-R9IREOLH.json",
        linkText: "View Live Demo"
    },
    {
        title: "AI Support Agent",
        description: "Developed an AI Agent to deliver accurate, knowledge-base-driven support for academic programs, admissions, and student services. Ensures verified, policy-compliant responses.",
        tags: ["AI Agents", "Botpress", "Education Tech", "Knowledge Base"],
        link: "https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/17/04/20250817041242-7TUYTAIK.json",
        linkText: "View Live Demo"
    },
    {
        title: "New Store Location Study Power BI Dashboard",
        description: "Performed business analysis and site selection through data-driven modelling. Leveraged data manipulation and modeling techniques to identify optimal store locations.",
        tags: ["Microsoft Power BI", "Data Manipulation", "Data Modeling"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTg1YTNlMjYtMjRlMS00Zjc2LTgwYTQtNTY4NzA2YTQ1ZmE3IiwidCI6IjYyNGQ1YzRiLTQ1YzUtNDEyMi04Y2QwLTQ0ZjBmODRlOTQ1ZCJ9",
        linkText: "View Dashboard"
    },
    {
        title: "Indian Fintech Insights",
        description: "Python notebooks and scripts showcasing data-driven visualizations of Indian economic and financial trends. Uses Matplotlib and pandas to analyze budget allocation, digital payments, and inflation.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
        link: "https://github.com/guptaji3010/Indian-fintech-insights",
        linkText: "View on GitHub"
    },
    {
        title: "Bond Analytics Toolkit",
        description: "A FastAPI-based toolkit for bond and fixed income calculations. Supports bond price sensitivity, yield spread, break-even yield, spot rates, duration, and forward rates.",
        tags: ["Python", "FastAPI", "Finance", "Bond Analytics"],
        link: "https://github.com/guptaji3010/Bond-analytics-fastapi-toolkit",
        linkText: "View on GitHub"
    },
    {
        title: "Supplier Performance App",
        description: "Streamlit app to evaluate supplier performance across 9 KPIs like On-Time Delivery, Pricing, Capacity, and Quality. Generates actionable insights for procurement.",
        tags: ["Python", "Streamlit", "KPI Tracking", "Procurement"],
        link: "https://smart-supplier-eval.streamlit.app/",
        linkText: "View Live App"
    }
];

const importData = async () => {
    try {
        await Project.deleteMany();
        await Project.insertMany(projects);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
