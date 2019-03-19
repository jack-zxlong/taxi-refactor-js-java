package com.twu.refactoring.movie;

import com.twu.refactoring.MovieAbstract;
import com.twu.refactoring.Rental;

public class NewReleaseMovie extends MovieAbstract{

	@Override
	public double getPrice(Rental each) {
		double moviePrice = 0;
		return moviePrice += each.getDaysRented() * 3;
	}
	
}
