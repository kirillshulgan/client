import './App.css';

interface ServiceCardProps {
    emoji: string;
    title: string;
    description: string;
    link: string;
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Shulgan Lab</h1>
                <p>Добро пожаловать на главную страницу</p>
                <div className="services">
                    <ServiceCard
                        emoji="🦊"
                        title="GitLab"
                        description="Система контроля версий"
                        link="https://git.shulgan-lab.ru"
                    />
                    <ServiceCard
                        emoji="⚡"
                        title="API"
                        description=".NET API сервисы"
                        link="https://api.shulgan-lab.ru"
                    />
                    <ServiceCard
                        emoji="🐳"
                        title="Portainer"
                        description="Управление контейнерами"
                        link="https://docker.shulgan-lab.ru"
                    />
                    <ServiceCard
                        emoji="🔧"
                        title="Nginx"
                        description="Proxy Manager"
                        link="https://nginx.shulgan-lab.ru"
                    />
                </div>
            </header>
        </div>
    );
}

function ServiceCard({ emoji, title, description, link }: ServiceCardProps) {
    return (
        <a href={link} className="service-link" target="_blank" rel="noopener noreferrer">
            <div className="service-card">
                <h3>{emoji} {title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
}

export default App;