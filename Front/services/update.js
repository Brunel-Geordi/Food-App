import { apiUrl } from "./api";
export const updateStatus = async (status, id) => {
    try {
      const response = await fetch(`${apiUrl}admin/status?status=${status}&id=${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });return response
    } catch (error) {
        return
    }
  };

export const updateFidelity = async (fidelity, id) => {
    try {
      const response = await fetch(`${apiUrl}users/fidelity?fidelity=${fidelity}&id=${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });return response
    } catch (error) {
        return
    }
  };