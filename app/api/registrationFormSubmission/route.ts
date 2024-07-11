import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export default async function formSubmissionHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MDS, Content-Type, Date, A-API-Version'
    );
    if (req.method === 'POST') {
        const { CarerPanel, EmergencyContactPanel, CaredForPanel, ConsentPanel} = req.body;

        try {
            const newEmergencyContact = await prisma.emergency_Contact.create({
                data: {
                    fullName: EmergencyContactPanel.fullName,
                    relationshipToCarer: EmergencyContactPanel.relationshipToCarer,
                    phoneNum: EmergencyContactPanel.phoneNumber,
                    address: EmergencyContactPanel.
                    }
            });
            // Create new carer
            const newCarer = await prisma.carer.create({
                data: {
                    title: CarerPanel.title,
                    fullName: CarerPanel.fullName,
                    dateOfBirth: CarerPanel.dateOfBirth1,
                    phoneNum: CarerPanel.phoneNumber,
                    postcode: CarerPanel.postcode,
                    email: CarerPanel.email,
                    gender: CarerPanel.gender,
                    ethnicity: CarerPanel.ethnicity,
                    faith: CarerPanel.faithReligion,
                    sexualOrientation: CarerPanel.sexualOrientation,
                    hasHealthCondition: CarerPanel.healthConidition,
                    typeHealthCondition: CarerPanel.additionalInformationForHealthCondition,
                    hasAllergies: CarerPanel.allergySpecialDietaryNeeds,
                    typeAllergies: CarerPanel.additionalInformationForAllergiesSpecialDietaryNeeds,
                    hasDisability: CarerPanel.disability,
                    typeDisability: CarerPanel.additionalInformationForDisability,
                    nameSurgeryDoctor: CarerPanel.nameOfDoctorSurgery,
                    referredBy: CarerPanel.referredBy,
                    preferredContact: ConsentPanel.preferredMannerOfContact,
                    Emergency_Contact: {
                        connect: {id: newEmergencyContact.id}
                    }, 
                }
            });
            const newCaredFor = await prisma.cared_for.create({
                data: {
                    fullName: CaredForPanel.fullName,
                    relationshipToCarer: CaredForPanel.relationshipToCarer,
                    ageGroup: CaredForPanel.ageGroup,
                    hasHealthCondition: CaredForPanel.healthCondition,
                    DisabilityRegistrationNum: CaredForPanel.disabilityRegistrationNumber,
                    Carer: {
                        create: {
                            id: newCarer.id,
                        }
                    }

                }
            });

            res.status(200).json({ success: true, data: {newCarer} })
        } catch (error) {
            console.error('Error creating records:', error);
            res.status(500).json({success: false, error: 'Error creating records '});
        }
    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
    
}

