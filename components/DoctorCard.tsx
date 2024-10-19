import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Define the type for doctor prop
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  consultationFee: string;
  available: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Top Section: Doctor Info and Rating */}
      <View style={styles.topSection}>
        <View style={styles.doctorInfo}>
          {/* Doctor Image */}
          <Image
            source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual image source
            style={styles.doctorImage}
          />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialtyText}>{doctor.specialty}</Text>
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{doctor.rating}</Text>
        </View>
      </View>

      {/* Availability Section */}
      <View style={styles.availabilityContainer}>
        <View style={styles.availableNowContainer}>
          <FontAwesome name="circle" size={12} color="#556600" />
          <Text style={styles.availableNow}> Available Now</Text>
        </View>
        <Text style={styles.consultationFee}>
          <Text style={styles.consultationFeeText}>
            {doctor.consultationFee}
          </Text>{" "}
          Consultation Fee
        </Text>
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
        <FontAwesome
          name="arrow-right"
          size={16}
          color="#fff"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  specialtyText: {
    color: "#6B7280",
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#4B5563",
  },
  availabilityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  availableNowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  availableNow: {
    fontSize: 14,
    color: "#556600",
    fontWeight: "bold",
    marginLeft: 4,
  },
  consultationFee: {
    fontSize: 14,
    color: "#4B5563",
  },
  consultationFeeText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111827",
  },
  bookButton: {
    backgroundColor: "#8c994e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 8,
  },
});

export default DoctorCard;
