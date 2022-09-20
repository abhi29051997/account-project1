const mongoose = require('mongoose');

const UserAccount = new mongoose.Schema({
    name: String,
    address: String,
    printName : String,
    cin : String,
    conutry: String,
    state : String,
    pan : String,
    ward : String,
    telNo : Number,
    faxNo : Number,
    BeginningFrom : Date,
    CommencingFrom : Date,
    currencyInfo : String,
    currencyString : String,
    currencyFont : String,
    type : String,
    gstin : String,
    dealerType : String,
    'taxRate-1' : Number,
    'taxRate-2' : Number,
    createState:  [{
            stateCode : String,
            stateName : String,
            gstStateCode : String,
    }],
    createCity: [{
        stateName : String,
        stateCode : String,
        country : String,
        cityName : String,
        state : String,
        pinCode : Number,
    }],
    createHsnCode: [{
        hsnCode: String,
        description: String,
        gstRate: String,
    }],
    createLoom: [{
        loomNo: String,
        model: String,
        staubliModelNo: String,
        loomWidth: String,
        frames: String,
        avgEffcienct: String,
        loomType: String,
        serialNo: String,
        staubliSerialNo: String,
        maxRPM: String,
        supplier: String,
        camDobby: String,
        beamDiameter: String,
        colors: String,
        loomShed: String,
    }],
    createFlange:[{
        flangeNo: String,
        condition: String,
        loanReturned: String,
        width: String,
        weigth: String,
        diameter: String,
        onLoan: String,
    }],
    createGodown:[{
        godownId: String,
        locationName: String,
    }],
    createYarnMill:[{
        yarnMillId: String,
        millName: String,
    }],
    createShedule:[{
        sheduleId: String,
        sheduleName: String,
        nature: String,
    }],
    createGroup:[{
        groupId: String,
        groupName: String,
        shedule: String,
    }],
    createCategory:[{
        categoryId: String,
        categoryName: String,
        accountGroup: String,
        shedule: String,
    }],
    createAccount:[{
        accountId: String,
        category: String,
        tdsRate: String,
        accountName: String,
        group: String,
        openingBalanceDR: String,
        panNo: String,
        accountAlias: String,
        Shedule: String,
        stateCode: String,
        intrestRate: String,
        address: String,
        country: String,
        city: String,
        pinCode: String,
        state: String,
        emailID: String,
        accountNo: String,
        swftCode: String,
        bank: String,
        branchName: String,
        ifscCode: String,
    }],
    createBank:[{
        bankId: String,
        bankName: String,
        accountNo: String,
        branchName: String,
        accountType: String,
        branchAddress: String,
    }],
    createYarn:[{
        yarnID: String,
        yarnName: String,
        blend: String,
        yarnType: String,
        unit: String,
        ne: String,
        ply: String,
        denier: String,
        filament: String,
        color: String,
        lycra: String,
        lyDenier: String,
        count: String,
        hsnCode: String,
        gstRate: String,
        slub: String,
        csp: String,
        tpi: String,
    }],
    createBlend:[{
        blendId: String,
        blendName: String,
        yarnType: String,
    }],
    createSparesGroup:[{
        groupId: String,
        groupName: String,
    }],
    createSpares:[{
        sparesId: String,
        sparesName: String,
        spareSubGroup: String,
        sparesGroup: String,
        uom: String,
        partNo: String,
        hsn: String,
        gstRate: String,
        hsnDes: String,
    }],
    createWeave:[{
        weaveId: String,
        weaveName: String,
        weaveDes: String,
    }],
    createYarnMillName:[{
        millNameId: String,
        millName: String,
    }],
    createPurchaseOrder:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createPurchaseOrderGray:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
     createPurchaseOrderYarn:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createPurchaseOrderSpare:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    fabric:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    gray:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    yarn:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    spare:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    fabricUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    grayUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    spareUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    yarnUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createSalesOrderFabric:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createSalesOrderGray:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createSalesOrderYarn:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createSalesOrderSpare:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    fabricSalesUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    graySalesUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    yarnSalesUpdated:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    fabricSales:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    graySales:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    yarnSales:[{
        name: String,
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        partyName: String,
        poNumber: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    createJobWithYarn:[{
        weft: String,
        yarn: String,
        wieght: String,
        challanNo: String,
        lotNo: String,
        rate: String,
        millName: String,
        shared: String,
        quantity: String,
        hsnCode: String,
        beg: String,
        godown: String,
    }],
    createJobWithYarnBeam:[{
        challanNo: String,
        tEnd: String,
        date: String,
        meter: String,
        flangeNo: String,
        setNo: String,
        partyNetWeight: String,
        csplNetWeight: String,
        csplGrossWeight: String,
        difference: String,
        flangeTearWeight: String,
        rate: String,
        lrDate: String,
        amount: String,
        truckNo: String,
    }],
    SizingPo:[{
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        qualityNo: String,
        poNumber: String,
        warpYarn: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
    SizingPoUpdate:[{
        tableData: [],
        otherCharges: [],
        remark: String,
        grandTotal: String,
        date: String,
        qualityNo: String,
        poNumber: String,
        warpYarn: String,
        cgst : String,
        sgst : String,
        igst : String,
        discount : String,
        frieghtCharges : String,
        orderCompleted : String,
    }],
  });

 module.exports = mongoose.model('UserAccount', UserAccount);