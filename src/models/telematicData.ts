export type TelematicData =  {
    "EquipmentHeader": {
        "OEMName": string,
        "Model": string,
        "SerialNumber": string,
        "SnapshotTime": string
    },
    "Location": {
        "Latitude": number,
        "Longitude": number,
        "Altitude": number,
        "AltitudeUnits": string
    },
    "CumulativeIdleHours": {
        "Hour": number
    },
    "CumulativeOperatingHours": {
        "Hour": number,
    },
    "Distance": {
        "OdometerUnits": "kilometre" | 'meters',
        "Odometer": number
    },
    "EngineStatus": {
        "Running": boolean
    },
    "FuelUsed": {
        "FuelUnits": string,
        "FuelConsumed": number
    },
    "FuelRemaining": {
        "Percent": number
    }
}