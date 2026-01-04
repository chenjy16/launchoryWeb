import React from 'react';
import { Card, Row } from 'antd';
import './App.css';


function App() {
    return (
        <div className="App">
            
            {/* 添加新代码 */}
            <Row justify="center" style={{ marginTop: '50px' }}>
                <Card title="macOS Desktop Screenshot Reference">
                    <img 
                        src="https://placehold.co/600x400" 
                        alt="macOS desktop screenshot showing various application icons and layout"
                        style={{ width: '100%', maxWidth: '600px' }}
                    />
                </Card>
            </Row>

        </div>
    );
}

export default App;