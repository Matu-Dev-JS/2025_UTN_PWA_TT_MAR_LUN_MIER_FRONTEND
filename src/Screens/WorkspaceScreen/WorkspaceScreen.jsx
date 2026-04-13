import React from 'react'
import { useParams } from 'react-router'
import useWorkspace from '../../hooks/useWorkspace'

const WorkspaceScreen = () => {
    const { workspace_id } = useParams()
    const { workspace, loading, error } = useWorkspace(workspace_id)

    return (
        <div style={{ padding: '20px' }}>
            {loading && <p>Cargando detalles del espacio de trabajo...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            
            {workspace && (
                <>
                    <header style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        padding: '10px 20px',
                        background: '#f4f4f4',
                        width: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderBottom: '1px solid #ddd'
                    }}>
                        <h1 style={{ margin: 0, fontSize: '1.2rem' }}>{workspace.title}</h1>
                    </header>
                    <div style={{ marginTop: '50px' }}>
                        <h2>Bienvenido a {workspace.title}</h2>
                        <p>{workspace.description}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default WorkspaceScreen
