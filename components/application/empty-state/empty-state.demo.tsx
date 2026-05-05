"use client";

import { EmptyState } from "./empty-state";

export const EmptyStateDefaultDemo = () => (
    <EmptyState size="lg">
        <EmptyState.Header>
            <EmptyState.Illustration type="cloud" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No projects yet</EmptyState.Title>
            <EmptyState.Description>
                Get started by creating your first project. You can always add more later.
            </EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <button className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
                Create project
            </button>
        </EmptyState.Footer>
    </EmptyState>
);

export const EmptyStateCardDemo = () => (
    <EmptyState size="lg" variant="card">
        <EmptyState.Header>
            <EmptyState.Illustration type="box" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No files uploaded</EmptyState.Title>
            <EmptyState.Description>
                Upload files to get started with your workspace.
            </EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <button className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
                Upload files
            </button>
        </EmptyState.Footer>
    </EmptyState>
);

export const EmptyStateMinimalDemo = () => (
    <EmptyState size="md" variant="minimal">
        <EmptyState.Header>
            <EmptyState.FeaturedIcon />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No results found</EmptyState.Title>
            <EmptyState.Description>
                Try adjusting your search terms.
            </EmptyState.Description>
        </EmptyState.Content>
    </EmptyState>
);

export const EmptyStateColorfulDemo = () => (
    <EmptyState size="lg" variant="colorful">
        <EmptyState.Header>
            <EmptyState.Illustration type="documents" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>Welcome to your dashboard</EmptyState.Title>
            <EmptyState.Description>
                Start exploring your data and insights.
            </EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get started
            </button>
        </EmptyState.Footer>
    </EmptyState>
);