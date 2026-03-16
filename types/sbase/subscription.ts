
export type SubscriptionStatus = 'active' | 'inactive' | 'canceled' | 'past_due' | 'trialing';

export interface SubscriptionRow {
    id: number;
    created_at: string;
    user_id: string;
    status: SubscriptionStatus;
    plan_id: string;
    entitlements: string[]; // composite[] -> array of objects
}