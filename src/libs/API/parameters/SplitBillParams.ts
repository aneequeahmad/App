type SplitBillParams = {
    reportID: string;
    amount: number;
    splits: string;
    comment: string;
    currency: string;
    merchant: string;
    created: string;
    category: string;
    tag: string;
    billable: boolean;
    transactionID: string;
    reportActionID: string;
    createdReportActionID?: string;
    policyID?: string;
};

export default SplitBillParams;
